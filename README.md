
# Snapshot of the CA School Immunization Data 

You can view the mirrored version by visiting this URL:

http://wgetsnaps.github.io/cdph.ca.gov--immunization_levels/programs/immunize/Pages/ImmunizationLevels.aspx.html


This repository is a mirror of the following site:

|        Key         |                                 Value                                  |
|--------------------|------------------------------------------------------------------------|
| Site title         | Immunization Rates in Child Care and Schools                           |
| Publisher | CA. Dept. of Public Health                                             |
| URL                | http://www.cdph.ca.gov/programs/immunize/Pages/ImmunizationLevels.aspx |
| Mirrored at        | 2016-01-11 07:42:55                                                    |




# Bash script and wget

Here are the Bash commands and __wget__ invocations I used to mirror the site. 



~~~sh
wget --recursive \
     --span-hosts \
     --level 1 \
     --no-host-directories \
     --adjust-extension \
     --convert-links \
     --output-file /dev/stdout \
     http://www.cdph.ca.gov/programs/immunize/Pages/ImmunizationLevels.aspx |
     tee ./wget.log
~~~
