function LinkedList(){
    var length = 0;
    var head = null;
    var Node = function(element){
        this.element = element;
        this.next = null;
    };
    this.size = function(){
        return length;
    };
    this.head = function(){
        return head;
    };
    this.add = function(element){
        var node = new Node(element);
        if(head === null){
            head = node;
        }else{
            
        }
    }
}