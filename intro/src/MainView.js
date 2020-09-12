import React from 'react';
import * as tf from '@tensorflow/tfjs';



const MainView = () => {


    const rotate90 = tf.tensor([[0, -1], [1, 0]])

    const a = tf.tensor([0, 1])

    const b = tf.dot(a, rotate90)

    console.log(` result ${b.print()}`)



    return (

        <div>{JSON.stringify(rotate90)}</div>

    )
}

export default MainView


