# Assessment Answer
## Week 8
#### Day 1

##### Questions

- What is MongoDB?
  > MongoDB is a document database that provides high performance, high availability, and easy scalability.

- Why do we need a Database?
  >  To store data so that they are retrievable / modifiable later

- What format does MongoDB use to store data?
  > BSON /ˈbiːsɒn/ is a computer data interchange format used mainly as a data storage and network transfer format in the MongoDB database. It is a binary form for representing simple data structures and associative arrays (called objects or documents in MongoDB).

##### Exercise

** Submit the commands required to make this happen **

1. Create a new MongoDB Database in your computer named `w5d1`
  ```terminal
  use w5d1
  ```

1. Create a `animals` collection within it
  ```terminal
  db.createCollection("animals")
  ```

1. Add 3 `animals` with different attributes to the collection
  ```terminal
  db.animals.insert({
      name: "dog"
  })

  db.animals.insert({
      name: "cat"
  })

  db.animals.insert({
      name: "dragon"
  })
  ```

1. Create a `owners` collection
  ```terminal
  db.createCollection("owners")
  ```

1. Add 3 `owners` with different attributes to the collection
  ```terminal
  db.owners.insert({
      name: "Harry"
  })

  db.owners.insert({
      name: "Fer"
  })

  db.owners.insert({
      name: "World"
  })
  ```

1. Add 1 `animal` to each `owner`:
  - one by reference
  - one embedded
  ```terminal
  harry_id = db.owners.findOne({name: "Harry"})._id

  db.animals.update(
      { "_id": ObjectId("552b1b33d04b0d6420cc23b7") },
      { name: "Hello Kitty", owner_id: harry_id }
  )

  db.animals.insert(
     {
          name: "Minions",
          owner: {
              name: "Fer"
          }
      }
  )
  ```


**BONUS**

- Update all `animals` to include the number of legs each one has
  ```terminal
  db.animals.update({ }, { $set: { legs: 4 } }, { multi: true })
  ```

- Write a query that will return how many animals have at least 4 legs
  ```terminal
  db.animals.find({ legs: { $gte: 4 } })
  ```
