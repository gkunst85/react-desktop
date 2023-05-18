import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  CTable,
  CTableHead,
  CTableBody,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CCard,
  CCardHeader,
  CCardBody,
  CCol,
  CRow,
} from '@coreui/react'

const GradualRollouts = () => {

  const [forecasts, setForecast] = useState([]);

  useEffect(() => {
	axios.get('http://localhost:5000/weatherForecast')
	  .then(response => {
		setForecast(response.data);
	  })
	  .catch(error => {
		console.error(error);
	  });
  }, []);


  return (
	<CRow>
	  <CCol xs={12}>
		<CCard className="mb-4">
		  <CTable hover color="Default">
			<CCardHeader>
			  <strong>Decryptor</strong>
			</CCardHeader>
			<CCardBody>
			  <CTableHead>
				<CTableRow>
				  {forecasts.map(x =>
					<CTableHeaderCell scope="col" key={x.summary}>{x.summary}</CTableHeaderCell>
				  )}
				</CTableRow>
			  </CTableHead>
			 {/* <CTableBody>*/}
				{/*<CTableRow>*/}
				{/*  <CTableHeaderCell scope="row">1</CTableHeaderCell>*/}
				{/*  <CTableDataCell>Mark</CTableDataCell>*/}
				{/*  <CTableDataCell>Otto</CTableDataCell>*/}
				{/*  <CTableDataCell>@mdo</CTableDataCell>*/}
				{/*</CTableRow>*/}
				{/*<CTableRow>*/}
				{/*  <CTableHeaderCell scope="row">2</CTableHeaderCell>*/}
				{/*  <CTableDataCell>Jacob</CTableDataCell>*/}
				{/*  <CTableDataCell>Thornton</CTableDataCell>*/}
				{/*  <CTableDataCell>@fat</CTableDataCell>*/}
				{/*</CTableRow>*/}
				{/*<CTableRow>*/}
				{/*  <CTableHeaderCell scope="row">3</CTableHeaderCell>*/}
				{/*  <CTableDataCell colSpan={2}>Larry the Bird</CTableDataCell>*/}
				{/*  <CTableDataCell>@twitter</CTableDataCell>*/}
				{/*</CTableRow>*/}
			 {/* </CTableBody>*/}
			</CCardBody>
		  </CTable>
		</CCard>
	  </CCol>
	</CRow>
  )
}

export default GradualRollouts
