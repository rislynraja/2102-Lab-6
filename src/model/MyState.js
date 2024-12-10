import React from 'react'

class MyState extends React.Component {
    static my_score = 0; // will be global - not on the heap
    static my_count = 0;
};

export default MyState;