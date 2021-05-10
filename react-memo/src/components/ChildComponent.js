import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

const ChildComponent = props => {
    useEffect(() => {
        props.fetchData('users')
      },[props.fetchData])

    console.log('Re-rendering child component')
    return <div><p><h2>{props.title}</h2>ChildComponent </p></div> 
}

export default React.memo(ChildComponent)


// Higher Order Optimization
/**  React.memo -> React.memo only checks for prop changes. return true 
 *                 if passing nextProps to render would return
                   the same result as passing prevProps to render,
                   otherwise return false Ex :- send the props only title return true, 
                   send the props as array return false

     useMemo(() => {},[]) ->  The array of dependencies is not passed as arguments to the function.

     useCallback() => 

     @all are prevent re-rendering of chilComponent hence its all make optimize solution 
 */