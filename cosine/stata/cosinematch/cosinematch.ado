program define cosinematch
*! v 0.1 14-Sep-2021 Akirawisnu:  Cosine Match - Record Linkage
*! 0.1 adapt cosine text matching from Bergvca (https://github.com/Bergvca/string_grouper)

version 16.0
syntax , XDAta(str) YDAta(str) XVar(str) YVar(str) [minscore(real 0.8)]

clear
python: mstr("`xdata'", "`ydata'", "`xvar'", "`yvar'", `minscore')

end

version 16.0	
python:
from sfi import Data, SFIToolkit
import pandas as pd
from string_grouper import match_strings
import time

def mstr(xdata,ydata,xvar,yvar,minscore):
    start_time = time.time() # Start the count of time
    
    x = pd.read_stata(xdata)
    y = pd.read_stata(ydata)
    	
    # Fuzzy match by school name
    merge = match_strings(x[xvar], y[yvar], min_similarity=minscore)
    	
    # Merge with ORI Data
    merge=merge.sort_values(by=['left_side','similarity'], ascending=False) # sort data 
    merge=merge.drop_duplicates(subset='left_side', keep='first', inplace=False) # drop all duplicates
    merge = merge.astype(str) # so similarity stay at their long float instead of integer format (forced)
    merge=merge.merge(y, left_on='right_side', right_on=yvar, how='inner')
    merge=merge.merge(x, left_on='left_side', right_on=xvar, how='inner')
    
    print("===============================================")
    print("Finished the work, with Average Similarity of: ")
    print(pd.to_numeric(merge['similarity'], errors='coerce').mean())
    print("--- %s seconds ---" % (time.time() - start_time))
    print("===============================================")
	
    # Get total Obs
    Data.setObsTotal(len(merge))
    # get the column names
    colnames = merge.columns
    
    for vrg in range(len(colnames)):
        dtype = merge.dtypes[vrg].name
        # make a valid Stata variable name
        varname = SFIToolkit.makeVarName(colnames[vrg])
        varval = merge[colnames[vrg]].values.tolist()
        if dtype == "int64":
            Data.addVarInt(varname)
            Data.store(varname, None, varval)
        elif dtype == "float64":
            Data.addVarDouble(varname)
            Data.store(varname, None, varval)
        elif dtype == "bool":
            Data.addVarByte(varname)
            Data.store(varname, None, varval)
        else:
            # all other types store as a string
            Data.addVarStr(varname, 1)
            s = [str(vrg) for vrg in varval] 
            Data.store(varname, None, s)
end