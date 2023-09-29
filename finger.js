class Fingers{
// const
	static keys=[[0,1,2,3,3],[6,6,7,8,9,9,9,9,9]];
// function
	constructor() {
		this.level=0;
		this.step=0;
	}
	flashon(){
		if(this.last!=null){
			$('#finger'+this.last).addClass('fingeron');
		}
	}
	flashoff(){
		if(this.last!=null){
			$('#finger'+this.last).removeClass('fingeron');
			this.last=null;
		}
	}
	find(klang,char){
		this.last=null;
		const keyboard=KeyData.tanes[klang];
		forloop:for(const line of keyboard){
			const left=line[0];
			for(let i=0;i<left.length;i++){
				if(left[i]==char){
					this.last=Fingers.keys[0][i];
					break forloop;
				}
			}
			const right=line[1];
			for(let i=0;i<right.length;i++){
				if(right[i]==char){
					this.last=Fingers.keys[1][i];
					break forloop;
				}
			}
		}
	}
}