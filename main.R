library(htmlwidgets)
library(devtools)

library(jsonlite)
toJSON(list(data = 75))


devtools::create("C3")  
setwd("C3")
scaffoldWidget("C3Gauge", edit = FALSE) 
install()
