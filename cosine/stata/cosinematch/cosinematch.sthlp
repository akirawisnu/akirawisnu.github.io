{smcl}
{* 14 September 2021}{...}
{cmd:help cosinematch}{right: ({browse "https://github.com/akirawisnu":Akirawisnu: cosinematch})}
{hline}

{title:Title}

{p2colset 5 17 19 2}{...}
{p2col:{cmd:cosinematch} {hline 2}} Record-linkage program -- Using Cosine and TF-IDF Matching based on bergvca match_string in Python
{p2colreset}{...}


{title:Syntax}

{p 8 16 2}
{cmd:cosinematch} {cmd:,}
{cmdab:xda:ta(}{it:dirname,filename}{cmd:)}
{cmdab:yda:ta(}{it:dirname,filename}{cmd:)}
{cmdab:xv:ar(}{it:varname}{cmd:)}
{cmdab:yv:ar(}{it:varname}{cmd:)}
[{cmdab:minscore(}{it:#}{cmd:)}]{p_end}


{title:Description}

{pstd}
{cmd:cosinematch} performs probabilistic record linkage between two
datasets that have no joint identifier necessary for standard merging (fuzzy).
The command is an extension of the {helpb reclink} command originally
written by Blasnik (2010).  The two datasets are called the
"master" (x) and "using" (y) datasets, however, due to the nature of Python, they are interchangeable.  
For each observation in the master dataset, the
program tries to find a best matched record from the using dataset
by transform them into sparse matrix based on TF-IDF. Thereafter, {cmd:cosinematch} command will utilize 
Chris van den Berg (2019) Cosine string matching, which utilize tf-idf to calculate cosine similarities 
within a single list or between two lists of strings.{p_end}


{title:Options}

{phang}
{cmd:xdata(}{it:dirname,filename}{cmd:)} specifies the name of a file (Stata) in the
master (x) dataset that uniquely identifies the observations.  The file path format 
should be in UNIX format, which use "/" separator instead of "\" in Windows

{phang}
{cmd:ydata(}{it:dirname,filename}{cmd:)} specifies the name of a file (Stata) in the
using (y) dataset that uniquely identifies the observations.  The file path format 
should be in UNIX format, which use "/" separator instead of "\" in Windows

{phang}
{cmd:xvar(}{it:varname}{cmd:)} specifies the name of a variable in the
master (x) dataset that will be fuzzy match with using (y) file. 

{phang}
{cmd:yvar(}{it:varname}{cmd:)} specifies the name of a variable in the
usingt (y) dataset that will be fuzzy match with using (x) file.

{phang}
{cmd:minscore(}{it:#}{cmd:)} specifies the matching scores (scaled 0-1)
for the linked observations.


{title:Reference}

{phang}
Van den Berg, C.  2019. Super Fast String Matching in Python. {browse "https://bergvca.github.io/2017/10/14/super-fast-string-matching.html"}.

{title:Author}

{pstd}Wisnu Harto Adiwijoyo{p_end}
{pstd}@akirawisnu{p_end}
{pstd}Faculty of Economics Science{p_end}
{pstd}University of Goettingen{p_end}
{pstd}{browse "mailto:wisnu_harto@yahoo.com":wisnu_harto@yahoo.com}

 
{title:Also see}

{p 4 14 2}Article:  {it:Stata Journal}, volume 15, number 3: {browse "http://www.stata-journal.com/article.html?article=dm0082":dm0082}

{p 7 14 2}Help:  {helpb reclink}, {helpb stnd_compname}, {helpb stnd_address}, {helpb clrevmatch} (if installed){p_end}
