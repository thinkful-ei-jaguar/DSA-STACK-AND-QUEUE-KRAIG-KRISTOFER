class _Node{
    //data is the new node to be created next is what it points to 
    constructor(data,next){
    this.data=data;
    this.next=next;
    }

}

class Stack{
constructor(){
    //instantiates with a value of null 
    this.top=null
}

push(data){

if(this.top===null){
this.top = new _Node(data,null)
return this.top
}
else{

const node = new _Node(data,this.top);
this.top = node;
}
} // end push function

pop(){
    const node = this.top;
    this.top =node.next;
    return node.data;
}



} // end class

module.exports= Stack