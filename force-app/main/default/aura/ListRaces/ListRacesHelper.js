({
    getRaces : function(component) {
        // What needs to happen when calling an apex controller action
        //1. Get the action
        var action = component.get('c.getRacesDB');
        
        //2. Set its parameters
        action.setParams({"race" : newRace});
        
        //3. Define the callback
        action.setCallback(this, function(response){
            var state = response.getState();
            if (component.isValid() && state == "SUCCESS") {
                component.set("v.races", response.getReturnValue());
            }
        })
        
        //4. Enqueue the aciton
        $A.enqueueAction(action);
    }
})