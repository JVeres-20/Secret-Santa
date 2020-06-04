String[] names= (input here);									//array of names
int[] outlist= new int[names.length()];				//array of each index's corresponding randomization

//each index in outlist cannot be itself and no indexes duplicate
//names[i] gets assigned to names[outlist[i]] in the secret santa
for (int a=0; a<names.length-1; a++){								//randomly assigns all indexes EXCEPT the final one
	int rand = Math.floor(Math.random()*names.length);
  boolean flag=false;																	//true when a new random number needs to be generated
  if (a=rand){
  	flag=true;
  }
  for (int b=0; b<a && flag==false; b++){
  	if (outlist[b]==rand){
    	flag=true;
    }
  }
  if (flag==false){
  	outlist[a]=rand;
  }
  else a=a-1;																						//if outlist does not get assigned, repeats for the same number
}
for (int d=0; d<names.length-1; d++){
	if (outlist.contains(d)!=true){
		outlist[names.length()-1]=d;
    break;
  }
}
if (outlist[names.length-1]==null){
	outlist[names.length-1]=outlist[0];
  outlist[0]=names.length-1;
}
