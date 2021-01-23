class Food{
    constructor(foodS, lastFed) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic': true
        }
        this.image = loadImage("images/Milk.png");
      }

      getFoodStock(){

        foodStock=database.ref('food');
        foodStock.on("value",function(data){
            foodS = data.val();
        });

      }


      updateFoodStock(state){
        database.ref('/').update({
            food: state,
            FoodTime:hour()
          })

      }
      deductFood(){

      }

      display(){
        var milk = 0


        for(var h=100; h<450 && milk <= foodS -1; h=h+50){
        for(var i=400; i<800 && milk <= foodS-1; i=i+20){
          
          image(this.image,i, h, 50, 50);
          milk = milk + 1;

         
        }}
      
        imageMode(CENTER);
        
      }
}

