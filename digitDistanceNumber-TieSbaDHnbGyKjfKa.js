let p=-1;function digitDistanceNumber(a,c=""){let d=a+"",b=d.length;return(p++,p+1>=b)?+c:(c+=Math.abs(d[p+1]-d[p]),digitDistanceNumber(a,c))}