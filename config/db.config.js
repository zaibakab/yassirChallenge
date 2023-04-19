module.exports={
  HOST:'localhost',
  PORT:'1433',
  USER:'zaibaksecondlog',
  PASSWORD:'zaibaksecondlog',
  DB:'air_quality_paris_zone',
  
  authentication: {
    type: 'default',
 },
  dialect:"mssql",
  pool:{
      max:5,
      min:0,
      acquire:30000,
      idle:10000
  }    
}