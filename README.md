 
## React and Tensorflow.js : Quickstart 

React is a fantastic framework for modularizing Javascript projects and here I’m going to give a quick run down on how to start using Tensorflow.js within a React project.

All the code for this can be found [here](https://github.com/NiallMcGinness/react-tensorflow-quickstart) but the main secret is just to import TensorFlow :

```js
import * as tf from '@tensorflow/tfjs';
```

From here we can start creating and manipulating tensors with all the utilities given to us by the TensorFlow team, see their [documentation](https://js.tensorflow.org/api/2.3.0/) 

```js
const rotate90 = tf.tensor([[0, -1], [1, 0]])
```

You might recognize this as a matrix which rotates a vector by 90 degrees , lets see if it works

```js
const a = tf.tensor([0, 1])

const b = tf.dot(a, rotate90)
```    

And we get the expected result 

```js
 console.log(` result ${b.print()}`)
// Tensor [1, 0]
```

I’m pretty exited by this, software is eating the world and linear algebra is eating software so I suspect there’ll be a lot of excuses to use it on the front end in the future