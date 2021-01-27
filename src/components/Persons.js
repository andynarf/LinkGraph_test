import React, {useEffect} from 'react';
import {loadData} from '../redux/actions/loadData';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Item from './Item'


const  Persons = ({loadData, data}) =>  {

  useEffect(() => {
    loadData()
  }, [])
  return (
    <div>
     <Item />
    </div>
  )
}


Persons.propTypes = {
  loadData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.person,
});

export default connect(mapStateToProps, { loadData })(Persons);