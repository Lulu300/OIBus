/**
 * Class Protocol : provides general attributes and methods for protocols.
 */
class ProtocolHandler {
  /**
   * @constructor for Protocol
   * @param {Object} engine
   */
  constructor(equipment, engine) {
    this.equipment = equipment
    this.engine = engine
  }

  connect() {
    const { equipmentId, protocol } = this.equipment
    console.warn(`equipement ${equipmentId} started with protocol ${protocol}`)
  }
}

module.exports = ProtocolHandler