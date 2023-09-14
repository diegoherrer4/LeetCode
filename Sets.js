/* A set data structure, as implemented in your provided code, typically consists of the following properties and methods:

// Collection: The core of the set data structure is an array (collection) that holds the elements of the set.

// Methods:

// has(element): Checks for the presence of an element in the set and returns true if the element exists
 in the collection, otherwise false.

// values(): Returns an array containing all the values (elements) in the set.

// add(element): Adds an element to the set if it doesn't already exist. Returns true if the element was 
successfully added (i.e., it didn't already exist in the set), otherwise false.

// remove(element): Removes an element from the set if it exists. Returns true if the element was 
successfully removed (i.e., it existed in the set), otherwise false.

// size(): Returns the number of elements in the set (i.e., the length of the collection array).

// union(otherSet): Returns a new set that is the union of the current set and another set (otherSet). 
The union of two sets contains all unique elements from both sets.


// intersection(otherSet): Returns a new set that is the intersection of the current set and another 
set (otherSet). The intersection contains elements that exist in both sets.

// difference(otherSet): Returns a new set that is the difference between the current set and another 
set (otherSet). The difference contains elements that exist in the current set but not in otherSet.

// subset(otherSet): Checks if the current set is a subset of another set (otherSet). It returns true 
if all elements in the current set are also present in otherSet.


// The provided mySet function encapsulates these properties and methods to create a basic set data 
structure. This data structure allows you to perform common set operations like union, intersection, and difference, as well as
//  basic operations like adding, removing, and checking for the presence of elements in the set.  */




function mySet() {
    // the var collection will hold the set
    var collection = [];
    // this method will check for the presence of an element and return true or false
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    };
    // this method will return all the values in the set
    this.values = function() {
        return collection;
    };
    // this method will add an element to the set
    this.add = function(element) {
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    };
    // this method will remove an element from a set
    this.remove = function(element) {
        if(this.has(element)){
            index = collection.indexOf(element);
            collection.splice(index,1);
            return true;
        }
        return false;
    };
    // this method will return the size of the collection
    this.size = function() {
        return collection.length;
    };
    // this method will return the union of two sets
    this.union = function(otherSet) {
        var unionSet = new mySet();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(function(e){
            unionSet.add(e);
        });
        secondSet.forEach(function(e){
            unionSet.add(e);
        });
        return unionSet;
    };
    // this method will return the intersection of two sets as a new set
    this.intersection = function(otherSet) {
        var intersectionSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function(e){
            if(otherSet.has(e)){
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    };
    // this method will return the difference of two sets as a new set
    this.difference = function(otherSet) {
        var differenceSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function(e){
            if(!otherSet.has(e)){
                differenceSet.add(e);
            }
        });
        return differenceSet;
    };
    // this method will test if the set is a subset of a different set
    this.subset = function(otherSet) {
        var firstSet = this.values();
        return firstSet.every(function(value) {
          return otherSet.has(value);
        });
    };
}