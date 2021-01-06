import krx from 'krx-stock-api'; 
(async () => console.log(await krx.getStock('244920')))();