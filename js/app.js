


$(function() {


var count = 0;



  AV.initialize("nyjvmi9wwv8fcoi80cdy8j2kaz4uoqqfq92oydnhtfrplflp", 
     "4ilnsy1jddnv7jdfnof11u2wk06uzevtuz7n5qtl6tp6qcyn");
      $("#hxq").click (function(){ 

        console.log("Fdas");
       count = count + 1;
      
      if (count == 5){
        alert("不要乱点～点坏了怎么办");
        return;
      }
      if (count < 9) 
        return;



       console.log("hello"); 
       $("#hxq").text("更漂亮的姑娘");
       var TestObject = AV.Object.extend("hxq");
       var testObject = new TestObject();
       testObject.save({brower: navigator.appVersion }, {
          success: function(object) {

          }
        });
      });


});

