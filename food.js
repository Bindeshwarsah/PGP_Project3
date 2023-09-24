const foodData=require('./food.json');

    //1. All the food items
    function allFoodItem(data){
         return data.map((item)=>item);
    }

   //2  All the food items with category
   function foodCategory(data,categories){
    return data.filter((item)=> item.category.toLowerCase()===categories.toLowerCase());
   }
    
    //All the food items with calorie above 100
    function foodCalorieAbove(data){ 
        return data.filter(item => item.calorie > 100);
    }
   
    //All the food items with calorie below 100
    function foodCalorieBelow(data){
        return data.filter((item)=>item.calorie<100);
    }

    //All the food items with highest protien content to lowest
    function highProteinToLow(data){
        return data.slice().sort((firstdata,seconddata)=>seconddata.protiens-firstdata.protiens);     
    }

    //All the food items with lowest cab content to highest
    function lowToHighCab(data){
        return data.slice().sort((firstdata,seconddata)=>firstdata.cab-seconddata.cab);
    }


    console.log("\n All food items\n")
    console.log(allFoodItem(foodData));
    console.log("\nFood items with category vegetables\n")
    console.log(foodCategory(foodData,"Vegetable"));
    console.log("\nFood items with category fruits\n")
    console.log(foodCategory(foodData,"fruit"));
    console.log("\nFood items with category proteins\n")
    console.log(foodCategory(foodData,"protein"));
    console.log("\nFood items with category nuts\n")
    console.log(foodCategory(foodData,"nuts"));
    console.log("\nFood items with category grains\n")
    console.log(foodCategory(foodData,"grain"));
    console.log("\nFood items with category dairy\n")
    console.log(foodCategory(foodData,"dairy"));
    console.log("\nAll the food items with calorie above 100\n");
    console.log(foodCalorieAbove(foodData));
    console.log("\nAll the food items with calorie below 100\n");
    console.log(foodCalorieBelow(foodData));
    console.log("\nAll the food items with highest protien content to lowest\n")
    console.log(highProteinToLow(foodData));
    console.log("\nAll the food items with lowest cab content to highest\n");
    console.log(lowToHighCab(foodData));







