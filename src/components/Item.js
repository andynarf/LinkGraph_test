import React from 'react';
import {connect} from 'react-redux';
import MapContainer from './MapContainer';
import AutoCompleteComponent  from './AutoCompleteComponent'


function Item({data}) {
  return (
    <div>
      {data.length > 0 && data[0].map((item, index) => (
          <div key={index}> | name: {item.name} | 
          address street: {item.address.street} | 
          address suite: {item.address.suite} | 
          <MapContainer lat={item.address.geo.lat} lng={item.address.geo.lng} />         
          </div>
        ))}
        
        Question 3 
        <AutoCompleteComponent suggestions={data[0].map((item) => {return item.name})} /> 
    </div>
  )
}
const mapStateToProps = state => ({
  data: state.person
})
export default connect(mapStateToProps)(Item)