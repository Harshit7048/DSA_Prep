// we have to create our own , Function.prototype.call without calling the native call method. to avoid overwriting the actual Function.prototype.call ,

Function.prototype.mycall = function (thisArgs, ...args) {
  // first of all I will implement a check on thisArgs

  thisArgs = thisArgs || window;

  // then I will convert the thisArgs in to object , like a primitive object so we can attach properties to it.
  // why? -> because a user may only give string sometimes and we can't attach the properties to it, so making it a object with just hte primitive one can make this issue go.

  thisArgs = Object(thisArgs);

  // now we will create a unique symbol fn
  // why? -> A Symbol produces a guaranteed-unique value. This key is used to temporarily stash the function on the object.

  const fn = Symbol();

  // Now we will attach this function to the thisArgs

  thisArgs[fn] = this;

  // here "this" = the function being called  (e.g., greet). Now thisArg has a method whose key is the Symbol and whose value is that function.

  // now the magic part

  const returnValue = thisArgs[fn](...args);

  // here we saved the returnValue of the this function respective of the args

  delete thisArgs[fn];

  // delete is important as if we don't then a memory trace will be left every time a this function called

  return returnValue;
};
