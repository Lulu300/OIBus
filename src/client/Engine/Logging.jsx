import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'reactstrap'
import { OIbInteger, OIbSelect, OIbText, OIbCheckBox, OIbTitle } from '../components/OIbForm'

const Logging = ({ logParameters, onChange }) => (
  <>
    <OIbTitle title="Log Parameters">
      <>
        <p>OIBus can send logs to 3 different supports</p>
        <ul>
          <li>The Console logs message on the terminal. It cannot be used when OIBus runs as a Windows service</li>
          <li>The File logs logs message on the chosen folder of the server</li>
          <ul>
            <li>filename: The filename of the logfile to write output to.</li>
            <li>
              maxsize: Max size in bytes of the logfile, if the size is exceeded then a new file is created, a counter will become a suffix of the log
              file.
            </li>
            <li>maxFiles: Limit the number of files created when the size of the logfile is exceeded.</li>
            <li>
              tailable: If true, log files will be rolled based on maxsize and maxfiles, but in ascending order. The filename will always have the
              most recent log lines. The larger the appended number, the older the log file. This option requires maxFiles to be set, or it will be
              ignored.
            </li>
          </ul>
          <li>
            The sqlite logs will be used to store logs on the chosen database of the server. This allows to see logs remotely using the Logs menu. The
            maximum size can be defined so older message will be deleted automatically.
          </li>
        </ul>
        <p>the logging level are defined as below:</p>
        <ul>
          <li>error: these logs needs investigation in a production system</li>
          <li>warning: unexpected behavior that will not impact significantly the system</li>
          <li>info: information useful to the administrator</li>
          <li>debug: informations useful only to debug an issue.</li>
          <li>silly: informations useful to debug an issue but they will significantly impact performances</li>
        </ul>
        <p>
          We recommend to use the info or warning levels in normal Mode and to put the debug or the silly mode only to identify the origin of an
          issue.
        </p>
      </>
    </OIbTitle>
    <Row>
      <Col md={3}>
        <OIbSelect
          label="Console Level"
          name="logParameters.consoleLevel"
          option={logParameters.consoleLevel}
          options={['silly', 'debug', 'info', 'warning', 'error']}
          help={<div>The level for the Console log</div>}
          onChange={onChange}
        />
      </Col>
      <Col md={3}>
        <OIbSelect
          name="logParameters.fileLevel"
          label="File Level"
          options={['silly', 'debug', 'info', 'warning', 'error']}
          option={logParameters.fileLevel}
          help={<div>The level for the file log</div>}
          onChange={onChange}
        />
      </Col>
      <Col md={3}>
        <OIbSelect
          label="Sqlite Level"
          name="logParameters.sqliteLevel"
          options={['silly', 'debug', 'info', 'warning', 'error']}
          option={logParameters.sqliteLevel}
          help={<div>The level for the sqlite log</div>}
          onChange={onChange}
        />
      </Col>
    </Row>
    <Row>
      <Col md={4}>
        <OIbText
          name="logParameters.filename"
          label="Filename for the log file"
          value={logParameters.filename}
          help={<div>The filename of the log file</div>}
          onChange={onChange}
        />
      </Col>
      <Col md={2}>
        <OIbInteger
          name="maxsize"
          label="File Max size"
          value={logParameters.maxsize}
          help={<div>Maximum size of file logs (Bytes)</div>}
          onChange={onChange}
        />
      </Col>
      <Col md={2}>
        <OIbInteger
          name="logParameters.maxFiles"
          label="number of files"
          value={logParameters.maxFiles}
          min={1}
          max={10}
          help={<div>The number of journal files (rotating)</div>}
          onChange={onChange}
        />
      </Col>
      <Col md={3}>
        <OIbCheckBox label="Tailable" name="logParameters.tailable" value={logParameters.tailable} onChange={onChange} />
      </Col>
    </Row>
    <Row>
      <Col md={4}>
        <OIbText
          name="logParameters.sqliteFilename"
          label="Filename of sqlite db"
          value={logParameters.sqliteFilename}
          help={<div>The filename of the db file</div>}
          onChange={onChange}
        />
      </Col>
      <Col md={2}>
        <OIbInteger
          name="logParameters.sqliteMaxFileSize"
          label="Db Max size"
          value={logParameters.sqliteMaxFileSize}
          help={<div>Max File Size of the sqlite database (Byte)</div>}
          onChange={onChange}
        />
      </Col>
    </Row>
  </>
)

Logging.propTypes = {
  onChange: PropTypes.func.isRequired,
  logParameters: PropTypes.object.isRequired,
}
export default Logging
