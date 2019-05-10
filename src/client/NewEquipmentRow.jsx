import React from 'react'
import PropTypes from 'prop-types'
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import Select from './components/Select.jsx'
import apis from './services/apis'

const NewEquipmentRow = ({ protocolList, addEquipment }) => {
  const [equipment, setEquipment] = React.useState({ equipmentId: '', enable: false, protocol: 'Modbus' })

  /**
   * Updates the equipment's state
   * @param {*} event The change event
   * @returns {void}
   */
  const handleChange = (event) => {
    const { target } = event
    const { value } = target
    //  update the new equipment's state
    setEquipment(prevState => ({ ...prevState, [target.name]: value }))
  }

  /**
   * Submits a new equipment
   * @returns {void}
   */
  const handleAddEquipement = async () => {
    if (equipment.equipmentId === '') return

    // Points is required on server side
    equipment.points = []

    try {
      await apis.addSouth(equipment)

      // add submitted equipment to the table
      addEquipment(equipment)
      // reset the line
      setEquipment({ equipmentId: '', enable: false, protocol: 'Modbus' })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Container>
      <Form>
        <FormGroup>
          <Label for="Id">
            Equipment Id:
            <Input value={equipment.equipmentId} id="Id" name="equipmentId" type="text" onChange={handleChange} />
          </Label>
        </FormGroup>
        <FormGroup>
          <Select value={equipment.protocol} id="protocol" name="protocol" options={protocolList} onChange={handleChange} />
        </FormGroup>
        <Button color="primary" onClick={() => handleAddEquipement()}>
          Add
        </Button>
      </Form>
    </Container>
  )
}

NewEquipmentRow.propTypes = {
  protocolList: PropTypes.arrayOf(PropTypes.string).isRequired,
  addEquipment: PropTypes.func.isRequired,
}
export default NewEquipmentRow