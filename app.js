document.getElementById("specialButton").addEventListener('click', function(){
       let count;
       firebase.database().ref('count').once('value').then(function(snapshot){//'once' reads data once, serves statically
           count = snapshot.val();
       }).then(
           (success)=>{
               count++;//change stepper
               firebase.database().ref('count').set(count);//update data: this overwrites all existing data to the new value
           },
           (error)=>{
               console.log(error);
           });
    });
    
    // document.getElementById("specialButton").addEventListener('click', function(){
    //   //UPDATE request
    //     firebase.database().ref('count').transaction(count=>{//transactions allows multiple people to connect and write simultaneously, without overwriting each other
    //         console.log(count);
    //         if(count){
    //             count++;
    //         }
    //         return count;
    //     });    
    // });
    
    
    function listen2(){
       firebase.database().ref('count').once('value').then(function(snapshot){//'once' reads data once, serves statically
           let num = snapshot.val();
           document.getElementById("count").innerHTML = num;
       });
    }
    

    // function listen(){  
    //     firebase.database().ref('count').on('value', function(snapshot){//'on' listens for changes, updates dynamically
    //         console.log(snapshot);  
    //         console.log(snapshot.val())
    //         document.getElementById("count").innerHTML = snapshot.val();  
    //         });
    // }

    
    listen2();