# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [1.0.1](https://github.com/OptimistikSAS/OIBus/compare/v1.0.0...v1.0.1) (2021-01-20)

## [1.0.0](https://github.com/OptimistikSAS/OIBus/compare/v0.8.1...v1.0.0) (2021-01-20)

### [0.8.1](https://github.com/OptimistikSAS/OIBus/compare/v0.8.0...v0.8.1) (2021-01-20)


### Features

* **North-fileWriter:** Add filewritter module ([ec8a10b](https://github.com/OptimistikSAS/OIBus/commit/ec8a10b892232d4273dd57988b3d843773ea8051))


### Bug Fixes

* **filewriter:** move to async syntax ([15b3cdc](https://github.com/OptimistikSAS/OIBus/commit/15b3cdc5b0c514c013a01cfff9c7259cc02a0409))
* **south-sqldbtofile:** Added unit for connection and request timeout. ([306b565](https://github.com/OptimistikSAS/OIBus/commit/306b565ed2bca06e46a06c5fdbcdb370e4152abf))

## [0.8.0](https://github.com/OptimistikSAS/OIBus/compare/v0.7.9...v0.8.0) (2021-01-18)


### ⚠ BREAKING CHANGES

* **south-mqtt:** fix timestamp key payload

### Features

* **client:** add the About menu ([4ba8404](https://github.com/OptimistikSAS/OIBus/commit/4ba8404014837f3cf2ba1dfe132a662c80dfaec6))
* **north:** Add API Key auth in OIbAuthentication component ([b1c6df9](https://github.com/OptimistikSAS/OIBus/commit/b1c6df91ed8cdb8eb21641210964d073f68d5a33))
* **north-CsvToHttp:** Add new North CsvToHttp ([d891f57](https://github.com/OptimistikSAS/OIBus/commit/d891f57c1f0d4ba242d30b160156ebcdb4105e0a))
* **south-mqtt:** Add point in the error callback subscription ([5f1a91a](https://github.com/OptimistikSAS/OIBus/commit/5f1a91af4071321a58123ce31c3964e3efddadbc))
* **south, north:** Added list sorting by column on south and north listing. ([b82c9ea](https://github.com/OptimistikSAS/OIBus/commit/b82c9ea5adf9675515a62643ca4ea1f14f00e9f2))


### Bug Fixes

* **engine:** listen mode should not generate error for each dataSource point and remove unused variable ([39835b4](https://github.com/OptimistikSAS/OIBus/commit/39835b49af1eae3a72889db364aedbd72c721cf2))
* **south:** handled if val is null ([1410ae4](https://github.com/OptimistikSAS/OIBus/commit/1410ae44d92528ba72ba3f56841abe61d0de1bd2))
* **south:** increased width on Scan Groups in OPCUA  and OPCHDA . Increased width in OPCUA settings. ([01cf190](https://github.com/OptimistikSAS/OIBus/commit/01cf1900e02868b077c3f9ee58f8bf25e3aa3459))
* **south-mqtt:** fix timestamp key payload ([89fcf07](https://github.com/OptimistikSAS/OIBus/commit/89fcf07adce7e3189595944fe666b85b2bbe487e))
* **test:** add testConfig.js ([f13a966](https://github.com/OptimistikSAS/OIBus/commit/f13a96676aeed31dc127b50647cc4d184b490bbe))

### [0.7.9](https://github.com/OptimistikSAS/OIBus/compare/v0.7.8...v0.7.9) (2021-01-06)


### Bug Fixes

* **south-mqtt:** optional password and more example for timestamp format ([36169aa](https://github.com/OptimistikSAS/OIBus/commit/36169aa527fb02ce8344505025351fb54d2bef14))

### [0.7.8](https://github.com/OptimistikSAS/OIBus/compare/v0.7.7...v0.7.8) (2021-01-06)


### Bug Fixes

* **deps:** update oracledb dep to 5.1.0 ([ba3e1f5](https://github.com/OptimistikSAS/OIBus/commit/ba3e1f52774415ce51e7db691f9d5dcf3df704c0))

### [0.7.7](https://github.com/OptimistikSAS/OIBus/compare/v0.7.6...v0.7.7) (2021-01-06)


### Bug Fixes

* **doc:** README History removal ([a9966da](https://github.com/OptimistikSAS/OIBus/commit/a9966daf77d77463da26ee8c2217644bc3eefa5f))
* **south-mqtt:** allow no user for authentication ([fdea603](https://github.com/OptimistikSAS/OIBus/commit/fdea6034bdea707a2fbb005d91dbf2c21ebc0824))

### [0.7.6](https://github.com/OptimistikSAS/OIBus/compare/v0.7.5...v0.7.6) (2021-01-04)


### Bug Fixes

* **deps:** add OPC Foundation Agreement of Use ([48c87c0](https://github.com/OptimistikSAS/OIBus/commit/48c87c08ac1d8a8f7c811ecd0e1a0e4c02644dfc))

### [0.7.5](https://github.com/OptimistikSAS/OIBus/compare/v0.7.4...v0.7.5) (2021-01-04)

### [0.7.4](https://github.com/OptimistikSAS/OIBus/compare/v0.7.2...v0.7.4) (2021-01-04)


### Bug Fixes

* **encryption:** bug was causing OIbus to fail on start ([9aa8f9c](https://github.com/OptimistikSAS/OIBus/commit/9aa8f9cfe5fc365b3c33887694c0117e591d195a))
* **engine:** fix rebase conflict ([4fb8642](https://github.com/OptimistikSAS/OIBus/commit/4fb864237c576c1e749b8cb75e6b6d58ba054e11))
* **engine:** fix rebase conflict and adapt tests ([fa62c27](https://github.com/OptimistikSAS/OIBus/commit/fa62c2777ee8c69e45e2e78b4ccdf80680426b3a))
* **Engine:** es6 check for empty value ([b959353](https://github.com/OptimistikSAS/OIBus/commit/b959353bb54c097dbab232841ebd3777a994c73d))
* **Engine:** es6 check for empty value and add test ([68b986c](https://github.com/OptimistikSAS/OIBus/commit/68b986c3eaaf21c8dcf9626132afd061da1743ab))
* **Engine:** fix test for config file in engine ([33a9695](https://github.com/OptimistikSAS/OIBus/commit/33a96954a560375f0d79f8a5688cfeec121826ca))
* **Engine:** fix test for config file in engine ([e9d8e38](https://github.com/OptimistikSAS/OIBus/commit/e9d8e389af77826b55b550000854b6d166399dac))
* **Engine:** remove engine snapshot ([7e219aa](https://github.com/OptimistikSAS/OIBus/commit/7e219aafa7055e342f499f8cac91e02b8c00082f))
* **Engine:** sanitizedValues with 'zero' value is accepted and correctly parsed [#932](https://github.com/OptimistikSAS/OIBus/issues/932) ([5300178](https://github.com/OptimistikSAS/OIBus/commit/5300178640528c7edb7e5378c675e53e0997083d))
* **Engine:** sanitizedValues with 'zero' value is accepted and correctly parsed [#932](https://github.com/OptimistikSAS/OIBus/issues/932) ([08e2755](https://github.com/OptimistikSAS/OIBus/commit/08e275568e43a19e3baeea9e806e54dd9e921200))
* **modbus:** add test and modbus format address in hexadecimal only (with 5 or 6 digit notation) ([ec4f591](https://github.com/OptimistikSAS/OIBus/commit/ec4f5917b2e74cd4b9b32bcd8028d3c8731dcb8c))
* **modbus:** fix validations on modbus points ([aab64d6](https://github.com/OptimistikSAS/OIBus/commit/aab64d6db0b52d8b0da51387d145db7021d2c24e))
* **ModBus:** add ip address validator and use it for ModBus without any protocol in front of it ([4db18ce](https://github.com/OptimistikSAS/OIBus/commit/4db18ce00b5a24f44a75781258b7104f83e2fadb))
* **ModBus:** change form for modbus host and fix a bug with scan modes on points ([039d1b1](https://github.com/OptimistikSAS/OIBus/commit/039d1b1bc99e3c22ba78b6440b0caaa13f337254))
* **ModBus:** communication with modbus slave ok ([5524ad4](https://github.com/OptimistikSAS/OIBus/commit/5524ad4201546a70960846f50836da272ed13b75))
* **MQTT:** manage listen mode only on MQTT front points settings ([b598188](https://github.com/OptimistikSAS/OIBus/commit/b598188f5b99bc8b0f852f77e5e08c4dcbee7d1c))
* **test:** adapt tests with hostname ([0b097bf](https://github.com/OptimistikSAS/OIBus/commit/0b097bf29cf4857dc1eaa572379de562aea171f7))
* **test:** testConfig file updated ([6e1f570](https://github.com/OptimistikSAS/OIBus/commit/6e1f570c8b9f3e17272423edd60d23c8dc9839f1))
