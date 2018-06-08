/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.ReqPlayerLogin = (function() {

    /**
     * Properties of a ReqPlayerLogin.
     * @exports IReqPlayerLogin
     * @interface IReqPlayerLogin
     */

    /**
     * Constructs a new ReqPlayerLogin.
     * @exports ReqPlayerLogin
     * @classdesc Represents a ReqPlayerLogin.
     * @implements IReqPlayerLogin
     * @constructor
     * @param {IReqPlayerLogin=} [properties] Properties to set
     */
    function ReqPlayerLogin(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new ReqPlayerLogin instance using the specified properties.
     * @function create
     * @memberof ReqPlayerLogin
     * @static
     * @param {IReqPlayerLogin=} [properties] Properties to set
     * @returns {ReqPlayerLogin} ReqPlayerLogin instance
     */
    ReqPlayerLogin.create = function create(properties) {
        return new ReqPlayerLogin(properties);
    };

    /**
     * Encodes the specified ReqPlayerLogin message. Does not implicitly {@link ReqPlayerLogin.verify|verify} messages.
     * @function encode
     * @memberof ReqPlayerLogin
     * @static
     * @param {IReqPlayerLogin} message ReqPlayerLogin message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqPlayerLogin.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified ReqPlayerLogin message, length delimited. Does not implicitly {@link ReqPlayerLogin.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqPlayerLogin
     * @static
     * @param {IReqPlayerLogin} message ReqPlayerLogin message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqPlayerLogin.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReqPlayerLogin message from the specified reader or buffer.
     * @function decode
     * @memberof ReqPlayerLogin
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqPlayerLogin} ReqPlayerLogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqPlayerLogin.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqPlayerLogin();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ReqPlayerLogin message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqPlayerLogin
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqPlayerLogin} ReqPlayerLogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqPlayerLogin.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReqPlayerLogin message.
     * @function verify
     * @memberof ReqPlayerLogin
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqPlayerLogin.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a ReqPlayerLogin message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqPlayerLogin
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqPlayerLogin} ReqPlayerLogin
     */
    ReqPlayerLogin.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqPlayerLogin)
            return object;
        return new $root.ReqPlayerLogin();
    };

    /**
     * Creates a plain object from a ReqPlayerLogin message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqPlayerLogin
     * @static
     * @param {ReqPlayerLogin} message ReqPlayerLogin
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqPlayerLogin.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this ReqPlayerLogin to JSON.
     * @function toJSON
     * @memberof ReqPlayerLogin
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqPlayerLogin.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ReqPlayerLogin;
})();

$root.RspPlayerLogin = (function() {

    /**
     * Properties of a RspPlayerLogin.
     * @exports IRspPlayerLogin
     * @interface IRspPlayerLogin
     * @property {number} resultID RspPlayerLogin resultID
     * @property {number} uin RspPlayerLogin uin
     */

    /**
     * Constructs a new RspPlayerLogin.
     * @exports RspPlayerLogin
     * @classdesc Represents a RspPlayerLogin.
     * @implements IRspPlayerLogin
     * @constructor
     * @param {IRspPlayerLogin=} [properties] Properties to set
     */
    function RspPlayerLogin(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RspPlayerLogin resultID.
     * @member {number} resultID
     * @memberof RspPlayerLogin
     * @instance
     */
    RspPlayerLogin.prototype.resultID = 0;

    /**
     * RspPlayerLogin uin.
     * @member {number} uin
     * @memberof RspPlayerLogin
     * @instance
     */
    RspPlayerLogin.prototype.uin = 0;

    /**
     * Creates a new RspPlayerLogin instance using the specified properties.
     * @function create
     * @memberof RspPlayerLogin
     * @static
     * @param {IRspPlayerLogin=} [properties] Properties to set
     * @returns {RspPlayerLogin} RspPlayerLogin instance
     */
    RspPlayerLogin.create = function create(properties) {
        return new RspPlayerLogin(properties);
    };

    /**
     * Encodes the specified RspPlayerLogin message. Does not implicitly {@link RspPlayerLogin.verify|verify} messages.
     * @function encode
     * @memberof RspPlayerLogin
     * @static
     * @param {IRspPlayerLogin} message RspPlayerLogin message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RspPlayerLogin.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.resultID);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.uin);
        return writer;
    };

    /**
     * Encodes the specified RspPlayerLogin message, length delimited. Does not implicitly {@link RspPlayerLogin.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RspPlayerLogin
     * @static
     * @param {IRspPlayerLogin} message RspPlayerLogin message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RspPlayerLogin.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RspPlayerLogin message from the specified reader or buffer.
     * @function decode
     * @memberof RspPlayerLogin
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RspPlayerLogin} RspPlayerLogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RspPlayerLogin.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RspPlayerLogin();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.resultID = reader.int32();
                break;
            case 2:
                message.uin = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("resultID"))
            throw $util.ProtocolError("missing required 'resultID'", { instance: message });
        if (!message.hasOwnProperty("uin"))
            throw $util.ProtocolError("missing required 'uin'", { instance: message });
        return message;
    };

    /**
     * Decodes a RspPlayerLogin message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RspPlayerLogin
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RspPlayerLogin} RspPlayerLogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RspPlayerLogin.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RspPlayerLogin message.
     * @function verify
     * @memberof RspPlayerLogin
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RspPlayerLogin.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.resultID))
            return "resultID: integer expected";
        if (!$util.isInteger(message.uin))
            return "uin: integer expected";
        return null;
    };

    /**
     * Creates a RspPlayerLogin message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RspPlayerLogin
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RspPlayerLogin} RspPlayerLogin
     */
    RspPlayerLogin.fromObject = function fromObject(object) {
        if (object instanceof $root.RspPlayerLogin)
            return object;
        var message = new $root.RspPlayerLogin();
        if (object.resultID != null)
            message.resultID = object.resultID | 0;
        if (object.uin != null)
            message.uin = object.uin | 0;
        return message;
    };

    /**
     * Creates a plain object from a RspPlayerLogin message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RspPlayerLogin
     * @static
     * @param {RspPlayerLogin} message RspPlayerLogin
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RspPlayerLogin.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.resultID = 0;
            object.uin = 0;
        }
        if (message.resultID != null && message.hasOwnProperty("resultID"))
            object.resultID = message.resultID;
        if (message.uin != null && message.hasOwnProperty("uin"))
            object.uin = message.uin;
        return object;
    };

    /**
     * Converts this RspPlayerLogin to JSON.
     * @function toJSON
     * @memberof RspPlayerLogin
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RspPlayerLogin.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RspPlayerLogin;
})();

$root.RspPlayerNotLogin = (function() {

    /**
     * Properties of a RspPlayerNotLogin.
     * @exports IRspPlayerNotLogin
     * @interface IRspPlayerNotLogin
     */

    /**
     * Constructs a new RspPlayerNotLogin.
     * @exports RspPlayerNotLogin
     * @classdesc Represents a RspPlayerNotLogin.
     * @implements IRspPlayerNotLogin
     * @constructor
     * @param {IRspPlayerNotLogin=} [properties] Properties to set
     */
    function RspPlayerNotLogin(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new RspPlayerNotLogin instance using the specified properties.
     * @function create
     * @memberof RspPlayerNotLogin
     * @static
     * @param {IRspPlayerNotLogin=} [properties] Properties to set
     * @returns {RspPlayerNotLogin} RspPlayerNotLogin instance
     */
    RspPlayerNotLogin.create = function create(properties) {
        return new RspPlayerNotLogin(properties);
    };

    /**
     * Encodes the specified RspPlayerNotLogin message. Does not implicitly {@link RspPlayerNotLogin.verify|verify} messages.
     * @function encode
     * @memberof RspPlayerNotLogin
     * @static
     * @param {IRspPlayerNotLogin} message RspPlayerNotLogin message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RspPlayerNotLogin.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified RspPlayerNotLogin message, length delimited. Does not implicitly {@link RspPlayerNotLogin.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RspPlayerNotLogin
     * @static
     * @param {IRspPlayerNotLogin} message RspPlayerNotLogin message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RspPlayerNotLogin.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RspPlayerNotLogin message from the specified reader or buffer.
     * @function decode
     * @memberof RspPlayerNotLogin
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RspPlayerNotLogin} RspPlayerNotLogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RspPlayerNotLogin.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RspPlayerNotLogin();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RspPlayerNotLogin message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RspPlayerNotLogin
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RspPlayerNotLogin} RspPlayerNotLogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RspPlayerNotLogin.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RspPlayerNotLogin message.
     * @function verify
     * @memberof RspPlayerNotLogin
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RspPlayerNotLogin.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a RspPlayerNotLogin message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RspPlayerNotLogin
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RspPlayerNotLogin} RspPlayerNotLogin
     */
    RspPlayerNotLogin.fromObject = function fromObject(object) {
        if (object instanceof $root.RspPlayerNotLogin)
            return object;
        return new $root.RspPlayerNotLogin();
    };

    /**
     * Creates a plain object from a RspPlayerNotLogin message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RspPlayerNotLogin
     * @static
     * @param {RspPlayerNotLogin} message RspPlayerNotLogin
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RspPlayerNotLogin.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this RspPlayerNotLogin to JSON.
     * @function toJSON
     * @memberof RspPlayerNotLogin
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RspPlayerNotLogin.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RspPlayerNotLogin;
})();

$root.ReqPlayerCreateTeam = (function() {

    /**
     * Properties of a ReqPlayerCreateTeam.
     * @exports IReqPlayerCreateTeam
     * @interface IReqPlayerCreateTeam
     * @property {number} teamSize ReqPlayerCreateTeam teamSize
     */

    /**
     * Constructs a new ReqPlayerCreateTeam.
     * @exports ReqPlayerCreateTeam
     * @classdesc Represents a ReqPlayerCreateTeam.
     * @implements IReqPlayerCreateTeam
     * @constructor
     * @param {IReqPlayerCreateTeam=} [properties] Properties to set
     */
    function ReqPlayerCreateTeam(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ReqPlayerCreateTeam teamSize.
     * @member {number} teamSize
     * @memberof ReqPlayerCreateTeam
     * @instance
     */
    ReqPlayerCreateTeam.prototype.teamSize = 0;

    /**
     * Creates a new ReqPlayerCreateTeam instance using the specified properties.
     * @function create
     * @memberof ReqPlayerCreateTeam
     * @static
     * @param {IReqPlayerCreateTeam=} [properties] Properties to set
     * @returns {ReqPlayerCreateTeam} ReqPlayerCreateTeam instance
     */
    ReqPlayerCreateTeam.create = function create(properties) {
        return new ReqPlayerCreateTeam(properties);
    };

    /**
     * Encodes the specified ReqPlayerCreateTeam message. Does not implicitly {@link ReqPlayerCreateTeam.verify|verify} messages.
     * @function encode
     * @memberof ReqPlayerCreateTeam
     * @static
     * @param {IReqPlayerCreateTeam} message ReqPlayerCreateTeam message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqPlayerCreateTeam.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.teamSize);
        return writer;
    };

    /**
     * Encodes the specified ReqPlayerCreateTeam message, length delimited. Does not implicitly {@link ReqPlayerCreateTeam.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqPlayerCreateTeam
     * @static
     * @param {IReqPlayerCreateTeam} message ReqPlayerCreateTeam message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqPlayerCreateTeam.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReqPlayerCreateTeam message from the specified reader or buffer.
     * @function decode
     * @memberof ReqPlayerCreateTeam
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqPlayerCreateTeam} ReqPlayerCreateTeam
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqPlayerCreateTeam.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqPlayerCreateTeam();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.teamSize = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("teamSize"))
            throw $util.ProtocolError("missing required 'teamSize'", { instance: message });
        return message;
    };

    /**
     * Decodes a ReqPlayerCreateTeam message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqPlayerCreateTeam
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqPlayerCreateTeam} ReqPlayerCreateTeam
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqPlayerCreateTeam.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReqPlayerCreateTeam message.
     * @function verify
     * @memberof ReqPlayerCreateTeam
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqPlayerCreateTeam.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.teamSize))
            return "teamSize: integer expected";
        return null;
    };

    /**
     * Creates a ReqPlayerCreateTeam message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqPlayerCreateTeam
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqPlayerCreateTeam} ReqPlayerCreateTeam
     */
    ReqPlayerCreateTeam.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqPlayerCreateTeam)
            return object;
        var message = new $root.ReqPlayerCreateTeam();
        if (object.teamSize != null)
            message.teamSize = object.teamSize | 0;
        return message;
    };

    /**
     * Creates a plain object from a ReqPlayerCreateTeam message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqPlayerCreateTeam
     * @static
     * @param {ReqPlayerCreateTeam} message ReqPlayerCreateTeam
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqPlayerCreateTeam.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.teamSize = 0;
        if (message.teamSize != null && message.hasOwnProperty("teamSize"))
            object.teamSize = message.teamSize;
        return object;
    };

    /**
     * Converts this ReqPlayerCreateTeam to JSON.
     * @function toJSON
     * @memberof ReqPlayerCreateTeam
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqPlayerCreateTeam.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ReqPlayerCreateTeam;
})();

$root.ReqPlayerJoinTeam = (function() {

    /**
     * Properties of a ReqPlayerJoinTeam.
     * @exports IReqPlayerJoinTeam
     * @interface IReqPlayerJoinTeam
     * @property {number} teamID ReqPlayerJoinTeam teamID
     */

    /**
     * Constructs a new ReqPlayerJoinTeam.
     * @exports ReqPlayerJoinTeam
     * @classdesc Represents a ReqPlayerJoinTeam.
     * @implements IReqPlayerJoinTeam
     * @constructor
     * @param {IReqPlayerJoinTeam=} [properties] Properties to set
     */
    function ReqPlayerJoinTeam(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ReqPlayerJoinTeam teamID.
     * @member {number} teamID
     * @memberof ReqPlayerJoinTeam
     * @instance
     */
    ReqPlayerJoinTeam.prototype.teamID = 0;

    /**
     * Creates a new ReqPlayerJoinTeam instance using the specified properties.
     * @function create
     * @memberof ReqPlayerJoinTeam
     * @static
     * @param {IReqPlayerJoinTeam=} [properties] Properties to set
     * @returns {ReqPlayerJoinTeam} ReqPlayerJoinTeam instance
     */
    ReqPlayerJoinTeam.create = function create(properties) {
        return new ReqPlayerJoinTeam(properties);
    };

    /**
     * Encodes the specified ReqPlayerJoinTeam message. Does not implicitly {@link ReqPlayerJoinTeam.verify|verify} messages.
     * @function encode
     * @memberof ReqPlayerJoinTeam
     * @static
     * @param {IReqPlayerJoinTeam} message ReqPlayerJoinTeam message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqPlayerJoinTeam.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.teamID);
        return writer;
    };

    /**
     * Encodes the specified ReqPlayerJoinTeam message, length delimited. Does not implicitly {@link ReqPlayerJoinTeam.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqPlayerJoinTeam
     * @static
     * @param {IReqPlayerJoinTeam} message ReqPlayerJoinTeam message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqPlayerJoinTeam.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReqPlayerJoinTeam message from the specified reader or buffer.
     * @function decode
     * @memberof ReqPlayerJoinTeam
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqPlayerJoinTeam} ReqPlayerJoinTeam
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqPlayerJoinTeam.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqPlayerJoinTeam();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.teamID = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("teamID"))
            throw $util.ProtocolError("missing required 'teamID'", { instance: message });
        return message;
    };

    /**
     * Decodes a ReqPlayerJoinTeam message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqPlayerJoinTeam
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqPlayerJoinTeam} ReqPlayerJoinTeam
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqPlayerJoinTeam.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReqPlayerJoinTeam message.
     * @function verify
     * @memberof ReqPlayerJoinTeam
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqPlayerJoinTeam.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.teamID))
            return "teamID: integer expected";
        return null;
    };

    /**
     * Creates a ReqPlayerJoinTeam message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqPlayerJoinTeam
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqPlayerJoinTeam} ReqPlayerJoinTeam
     */
    ReqPlayerJoinTeam.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqPlayerJoinTeam)
            return object;
        var message = new $root.ReqPlayerJoinTeam();
        if (object.teamID != null)
            message.teamID = object.teamID | 0;
        return message;
    };

    /**
     * Creates a plain object from a ReqPlayerJoinTeam message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqPlayerJoinTeam
     * @static
     * @param {ReqPlayerJoinTeam} message ReqPlayerJoinTeam
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqPlayerJoinTeam.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.teamID = 0;
        if (message.teamID != null && message.hasOwnProperty("teamID"))
            object.teamID = message.teamID;
        return object;
    };

    /**
     * Converts this ReqPlayerJoinTeam to JSON.
     * @function toJSON
     * @memberof ReqPlayerJoinTeam
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqPlayerJoinTeam.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ReqPlayerJoinTeam;
})();

$root.ReqPlayerLeaveTeam = (function() {

    /**
     * Properties of a ReqPlayerLeaveTeam.
     * @exports IReqPlayerLeaveTeam
     * @interface IReqPlayerLeaveTeam
     * @property {number} teamID ReqPlayerLeaveTeam teamID
     */

    /**
     * Constructs a new ReqPlayerLeaveTeam.
     * @exports ReqPlayerLeaveTeam
     * @classdesc Represents a ReqPlayerLeaveTeam.
     * @implements IReqPlayerLeaveTeam
     * @constructor
     * @param {IReqPlayerLeaveTeam=} [properties] Properties to set
     */
    function ReqPlayerLeaveTeam(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ReqPlayerLeaveTeam teamID.
     * @member {number} teamID
     * @memberof ReqPlayerLeaveTeam
     * @instance
     */
    ReqPlayerLeaveTeam.prototype.teamID = 0;

    /**
     * Creates a new ReqPlayerLeaveTeam instance using the specified properties.
     * @function create
     * @memberof ReqPlayerLeaveTeam
     * @static
     * @param {IReqPlayerLeaveTeam=} [properties] Properties to set
     * @returns {ReqPlayerLeaveTeam} ReqPlayerLeaveTeam instance
     */
    ReqPlayerLeaveTeam.create = function create(properties) {
        return new ReqPlayerLeaveTeam(properties);
    };

    /**
     * Encodes the specified ReqPlayerLeaveTeam message. Does not implicitly {@link ReqPlayerLeaveTeam.verify|verify} messages.
     * @function encode
     * @memberof ReqPlayerLeaveTeam
     * @static
     * @param {IReqPlayerLeaveTeam} message ReqPlayerLeaveTeam message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqPlayerLeaveTeam.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.teamID);
        return writer;
    };

    /**
     * Encodes the specified ReqPlayerLeaveTeam message, length delimited. Does not implicitly {@link ReqPlayerLeaveTeam.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqPlayerLeaveTeam
     * @static
     * @param {IReqPlayerLeaveTeam} message ReqPlayerLeaveTeam message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqPlayerLeaveTeam.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReqPlayerLeaveTeam message from the specified reader or buffer.
     * @function decode
     * @memberof ReqPlayerLeaveTeam
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqPlayerLeaveTeam} ReqPlayerLeaveTeam
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqPlayerLeaveTeam.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqPlayerLeaveTeam();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.teamID = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("teamID"))
            throw $util.ProtocolError("missing required 'teamID'", { instance: message });
        return message;
    };

    /**
     * Decodes a ReqPlayerLeaveTeam message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqPlayerLeaveTeam
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqPlayerLeaveTeam} ReqPlayerLeaveTeam
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqPlayerLeaveTeam.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReqPlayerLeaveTeam message.
     * @function verify
     * @memberof ReqPlayerLeaveTeam
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqPlayerLeaveTeam.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.teamID))
            return "teamID: integer expected";
        return null;
    };

    /**
     * Creates a ReqPlayerLeaveTeam message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqPlayerLeaveTeam
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqPlayerLeaveTeam} ReqPlayerLeaveTeam
     */
    ReqPlayerLeaveTeam.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqPlayerLeaveTeam)
            return object;
        var message = new $root.ReqPlayerLeaveTeam();
        if (object.teamID != null)
            message.teamID = object.teamID | 0;
        return message;
    };

    /**
     * Creates a plain object from a ReqPlayerLeaveTeam message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqPlayerLeaveTeam
     * @static
     * @param {ReqPlayerLeaveTeam} message ReqPlayerLeaveTeam
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqPlayerLeaveTeam.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.teamID = 0;
        if (message.teamID != null && message.hasOwnProperty("teamID"))
            object.teamID = message.teamID;
        return object;
    };

    /**
     * Converts this ReqPlayerLeaveTeam to JSON.
     * @function toJSON
     * @memberof ReqPlayerLeaveTeam
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqPlayerLeaveTeam.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ReqPlayerLeaveTeam;
})();

$root.ReqPlayerChangeSeat = (function() {

    /**
     * Properties of a ReqPlayerChangeSeat.
     * @exports IReqPlayerChangeSeat
     * @interface IReqPlayerChangeSeat
     * @property {number} targetSeat ReqPlayerChangeSeat targetSeat
     */

    /**
     * Constructs a new ReqPlayerChangeSeat.
     * @exports ReqPlayerChangeSeat
     * @classdesc Represents a ReqPlayerChangeSeat.
     * @implements IReqPlayerChangeSeat
     * @constructor
     * @param {IReqPlayerChangeSeat=} [properties] Properties to set
     */
    function ReqPlayerChangeSeat(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ReqPlayerChangeSeat targetSeat.
     * @member {number} targetSeat
     * @memberof ReqPlayerChangeSeat
     * @instance
     */
    ReqPlayerChangeSeat.prototype.targetSeat = 0;

    /**
     * Creates a new ReqPlayerChangeSeat instance using the specified properties.
     * @function create
     * @memberof ReqPlayerChangeSeat
     * @static
     * @param {IReqPlayerChangeSeat=} [properties] Properties to set
     * @returns {ReqPlayerChangeSeat} ReqPlayerChangeSeat instance
     */
    ReqPlayerChangeSeat.create = function create(properties) {
        return new ReqPlayerChangeSeat(properties);
    };

    /**
     * Encodes the specified ReqPlayerChangeSeat message. Does not implicitly {@link ReqPlayerChangeSeat.verify|verify} messages.
     * @function encode
     * @memberof ReqPlayerChangeSeat
     * @static
     * @param {IReqPlayerChangeSeat} message ReqPlayerChangeSeat message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqPlayerChangeSeat.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.targetSeat);
        return writer;
    };

    /**
     * Encodes the specified ReqPlayerChangeSeat message, length delimited. Does not implicitly {@link ReqPlayerChangeSeat.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqPlayerChangeSeat
     * @static
     * @param {IReqPlayerChangeSeat} message ReqPlayerChangeSeat message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqPlayerChangeSeat.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReqPlayerChangeSeat message from the specified reader or buffer.
     * @function decode
     * @memberof ReqPlayerChangeSeat
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqPlayerChangeSeat} ReqPlayerChangeSeat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqPlayerChangeSeat.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqPlayerChangeSeat();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.targetSeat = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("targetSeat"))
            throw $util.ProtocolError("missing required 'targetSeat'", { instance: message });
        return message;
    };

    /**
     * Decodes a ReqPlayerChangeSeat message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqPlayerChangeSeat
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqPlayerChangeSeat} ReqPlayerChangeSeat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqPlayerChangeSeat.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReqPlayerChangeSeat message.
     * @function verify
     * @memberof ReqPlayerChangeSeat
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqPlayerChangeSeat.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.targetSeat))
            return "targetSeat: integer expected";
        return null;
    };

    /**
     * Creates a ReqPlayerChangeSeat message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqPlayerChangeSeat
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqPlayerChangeSeat} ReqPlayerChangeSeat
     */
    ReqPlayerChangeSeat.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqPlayerChangeSeat)
            return object;
        var message = new $root.ReqPlayerChangeSeat();
        if (object.targetSeat != null)
            message.targetSeat = object.targetSeat | 0;
        return message;
    };

    /**
     * Creates a plain object from a ReqPlayerChangeSeat message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqPlayerChangeSeat
     * @static
     * @param {ReqPlayerChangeSeat} message ReqPlayerChangeSeat
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqPlayerChangeSeat.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.targetSeat = 0;
        if (message.targetSeat != null && message.hasOwnProperty("targetSeat"))
            object.targetSeat = message.targetSeat;
        return object;
    };

    /**
     * Converts this ReqPlayerChangeSeat to JSON.
     * @function toJSON
     * @memberof ReqPlayerChangeSeat
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqPlayerChangeSeat.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ReqPlayerChangeSeat;
})();

$root.ReqRemovePlayer = (function() {

    /**
     * Properties of a ReqRemovePlayer.
     * @exports IReqRemovePlayer
     * @interface IReqRemovePlayer
     * @property {number} targetSeat ReqRemovePlayer targetSeat
     */

    /**
     * Constructs a new ReqRemovePlayer.
     * @exports ReqRemovePlayer
     * @classdesc Represents a ReqRemovePlayer.
     * @implements IReqRemovePlayer
     * @constructor
     * @param {IReqRemovePlayer=} [properties] Properties to set
     */
    function ReqRemovePlayer(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ReqRemovePlayer targetSeat.
     * @member {number} targetSeat
     * @memberof ReqRemovePlayer
     * @instance
     */
    ReqRemovePlayer.prototype.targetSeat = 0;

    /**
     * Creates a new ReqRemovePlayer instance using the specified properties.
     * @function create
     * @memberof ReqRemovePlayer
     * @static
     * @param {IReqRemovePlayer=} [properties] Properties to set
     * @returns {ReqRemovePlayer} ReqRemovePlayer instance
     */
    ReqRemovePlayer.create = function create(properties) {
        return new ReqRemovePlayer(properties);
    };

    /**
     * Encodes the specified ReqRemovePlayer message. Does not implicitly {@link ReqRemovePlayer.verify|verify} messages.
     * @function encode
     * @memberof ReqRemovePlayer
     * @static
     * @param {IReqRemovePlayer} message ReqRemovePlayer message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqRemovePlayer.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.targetSeat);
        return writer;
    };

    /**
     * Encodes the specified ReqRemovePlayer message, length delimited. Does not implicitly {@link ReqRemovePlayer.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqRemovePlayer
     * @static
     * @param {IReqRemovePlayer} message ReqRemovePlayer message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqRemovePlayer.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReqRemovePlayer message from the specified reader or buffer.
     * @function decode
     * @memberof ReqRemovePlayer
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqRemovePlayer} ReqRemovePlayer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqRemovePlayer.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqRemovePlayer();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.targetSeat = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("targetSeat"))
            throw $util.ProtocolError("missing required 'targetSeat'", { instance: message });
        return message;
    };

    /**
     * Decodes a ReqRemovePlayer message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqRemovePlayer
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqRemovePlayer} ReqRemovePlayer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqRemovePlayer.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReqRemovePlayer message.
     * @function verify
     * @memberof ReqRemovePlayer
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqRemovePlayer.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.targetSeat))
            return "targetSeat: integer expected";
        return null;
    };

    /**
     * Creates a ReqRemovePlayer message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqRemovePlayer
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqRemovePlayer} ReqRemovePlayer
     */
    ReqRemovePlayer.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqRemovePlayer)
            return object;
        var message = new $root.ReqRemovePlayer();
        if (object.targetSeat != null)
            message.targetSeat = object.targetSeat | 0;
        return message;
    };

    /**
     * Creates a plain object from a ReqRemovePlayer message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqRemovePlayer
     * @static
     * @param {ReqRemovePlayer} message ReqRemovePlayer
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqRemovePlayer.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.targetSeat = 0;
        if (message.targetSeat != null && message.hasOwnProperty("targetSeat"))
            object.targetSeat = message.targetSeat;
        return object;
    };

    /**
     * Converts this ReqRemovePlayer to JSON.
     * @function toJSON
     * @memberof ReqRemovePlayer
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqRemovePlayer.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ReqRemovePlayer;
})();

$root.ReqPlayerReady = (function() {

    /**
     * Properties of a ReqPlayerReady.
     * @exports IReqPlayerReady
     * @interface IReqPlayerReady
     * @property {number} operation ReqPlayerReady operation
     */

    /**
     * Constructs a new ReqPlayerReady.
     * @exports ReqPlayerReady
     * @classdesc Represents a ReqPlayerReady.
     * @implements IReqPlayerReady
     * @constructor
     * @param {IReqPlayerReady=} [properties] Properties to set
     */
    function ReqPlayerReady(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ReqPlayerReady operation.
     * @member {number} operation
     * @memberof ReqPlayerReady
     * @instance
     */
    ReqPlayerReady.prototype.operation = 0;

    /**
     * Creates a new ReqPlayerReady instance using the specified properties.
     * @function create
     * @memberof ReqPlayerReady
     * @static
     * @param {IReqPlayerReady=} [properties] Properties to set
     * @returns {ReqPlayerReady} ReqPlayerReady instance
     */
    ReqPlayerReady.create = function create(properties) {
        return new ReqPlayerReady(properties);
    };

    /**
     * Encodes the specified ReqPlayerReady message. Does not implicitly {@link ReqPlayerReady.verify|verify} messages.
     * @function encode
     * @memberof ReqPlayerReady
     * @static
     * @param {IReqPlayerReady} message ReqPlayerReady message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqPlayerReady.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.operation);
        return writer;
    };

    /**
     * Encodes the specified ReqPlayerReady message, length delimited. Does not implicitly {@link ReqPlayerReady.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqPlayerReady
     * @static
     * @param {IReqPlayerReady} message ReqPlayerReady message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqPlayerReady.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReqPlayerReady message from the specified reader or buffer.
     * @function decode
     * @memberof ReqPlayerReady
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqPlayerReady} ReqPlayerReady
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqPlayerReady.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqPlayerReady();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.operation = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("operation"))
            throw $util.ProtocolError("missing required 'operation'", { instance: message });
        return message;
    };

    /**
     * Decodes a ReqPlayerReady message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqPlayerReady
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqPlayerReady} ReqPlayerReady
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqPlayerReady.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReqPlayerReady message.
     * @function verify
     * @memberof ReqPlayerReady
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqPlayerReady.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.operation))
            return "operation: integer expected";
        return null;
    };

    /**
     * Creates a ReqPlayerReady message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqPlayerReady
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqPlayerReady} ReqPlayerReady
     */
    ReqPlayerReady.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqPlayerReady)
            return object;
        var message = new $root.ReqPlayerReady();
        if (object.operation != null)
            message.operation = object.operation | 0;
        return message;
    };

    /**
     * Creates a plain object from a ReqPlayerReady message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqPlayerReady
     * @static
     * @param {ReqPlayerReady} message ReqPlayerReady
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqPlayerReady.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.operation = 0;
        if (message.operation != null && message.hasOwnProperty("operation"))
            object.operation = message.operation;
        return object;
    };

    /**
     * Converts this ReqPlayerReady to JSON.
     * @function toJSON
     * @memberof ReqPlayerReady
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqPlayerReady.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ReqPlayerReady;
})();

$root.RspPlayerTeamAction = (function() {

    /**
     * Properties of a RspPlayerTeamAction.
     * @exports IRspPlayerTeamAction
     * @interface IRspPlayerTeamAction
     * @property {number} resultID RspPlayerTeamAction resultID
     * @property {number|null} [teamID] RspPlayerTeamAction teamID
     * @property {number} action RspPlayerTeamAction action
     * @property {Array.<number>|null} [playerList] RspPlayerTeamAction playerList
     * @property {Array.<number>|null} [readyList] RspPlayerTeamAction readyList
     * @property {number|null} [leaderUin] RspPlayerTeamAction leaderUin
     */

    /**
     * Constructs a new RspPlayerTeamAction.
     * @exports RspPlayerTeamAction
     * @classdesc Represents a RspPlayerTeamAction.
     * @implements IRspPlayerTeamAction
     * @constructor
     * @param {IRspPlayerTeamAction=} [properties] Properties to set
     */
    function RspPlayerTeamAction(properties) {
        this.playerList = [];
        this.readyList = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RspPlayerTeamAction resultID.
     * @member {number} resultID
     * @memberof RspPlayerTeamAction
     * @instance
     */
    RspPlayerTeamAction.prototype.resultID = 0;

    /**
     * RspPlayerTeamAction teamID.
     * @member {number} teamID
     * @memberof RspPlayerTeamAction
     * @instance
     */
    RspPlayerTeamAction.prototype.teamID = 0;

    /**
     * RspPlayerTeamAction action.
     * @member {number} action
     * @memberof RspPlayerTeamAction
     * @instance
     */
    RspPlayerTeamAction.prototype.action = 0;

    /**
     * RspPlayerTeamAction playerList.
     * @member {Array.<number>} playerList
     * @memberof RspPlayerTeamAction
     * @instance
     */
    RspPlayerTeamAction.prototype.playerList = $util.emptyArray;

    /**
     * RspPlayerTeamAction readyList.
     * @member {Array.<number>} readyList
     * @memberof RspPlayerTeamAction
     * @instance
     */
    RspPlayerTeamAction.prototype.readyList = $util.emptyArray;

    /**
     * RspPlayerTeamAction leaderUin.
     * @member {number} leaderUin
     * @memberof RspPlayerTeamAction
     * @instance
     */
    RspPlayerTeamAction.prototype.leaderUin = 0;

    /**
     * Creates a new RspPlayerTeamAction instance using the specified properties.
     * @function create
     * @memberof RspPlayerTeamAction
     * @static
     * @param {IRspPlayerTeamAction=} [properties] Properties to set
     * @returns {RspPlayerTeamAction} RspPlayerTeamAction instance
     */
    RspPlayerTeamAction.create = function create(properties) {
        return new RspPlayerTeamAction(properties);
    };

    /**
     * Encodes the specified RspPlayerTeamAction message. Does not implicitly {@link RspPlayerTeamAction.verify|verify} messages.
     * @function encode
     * @memberof RspPlayerTeamAction
     * @static
     * @param {IRspPlayerTeamAction} message RspPlayerTeamAction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RspPlayerTeamAction.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.resultID);
        if (message.teamID != null && message.hasOwnProperty("teamID"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.teamID);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.action);
        if (message.playerList != null && message.playerList.length)
            for (var i = 0; i < message.playerList.length; ++i)
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.playerList[i]);
        if (message.readyList != null && message.readyList.length)
            for (var i = 0; i < message.readyList.length; ++i)
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.readyList[i]);
        if (message.leaderUin != null && message.hasOwnProperty("leaderUin"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.leaderUin);
        return writer;
    };

    /**
     * Encodes the specified RspPlayerTeamAction message, length delimited. Does not implicitly {@link RspPlayerTeamAction.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RspPlayerTeamAction
     * @static
     * @param {IRspPlayerTeamAction} message RspPlayerTeamAction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RspPlayerTeamAction.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RspPlayerTeamAction message from the specified reader or buffer.
     * @function decode
     * @memberof RspPlayerTeamAction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RspPlayerTeamAction} RspPlayerTeamAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RspPlayerTeamAction.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RspPlayerTeamAction();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.resultID = reader.int32();
                break;
            case 2:
                message.teamID = reader.int32();
                break;
            case 3:
                message.action = reader.int32();
                break;
            case 4:
                if (!(message.playerList && message.playerList.length))
                    message.playerList = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.playerList.push(reader.int32());
                } else
                    message.playerList.push(reader.int32());
                break;
            case 5:
                if (!(message.readyList && message.readyList.length))
                    message.readyList = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.readyList.push(reader.int32());
                } else
                    message.readyList.push(reader.int32());
                break;
            case 6:
                message.leaderUin = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("resultID"))
            throw $util.ProtocolError("missing required 'resultID'", { instance: message });
        if (!message.hasOwnProperty("action"))
            throw $util.ProtocolError("missing required 'action'", { instance: message });
        return message;
    };

    /**
     * Decodes a RspPlayerTeamAction message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RspPlayerTeamAction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RspPlayerTeamAction} RspPlayerTeamAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RspPlayerTeamAction.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RspPlayerTeamAction message.
     * @function verify
     * @memberof RspPlayerTeamAction
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RspPlayerTeamAction.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.resultID))
            return "resultID: integer expected";
        if (message.teamID != null && message.hasOwnProperty("teamID"))
            if (!$util.isInteger(message.teamID))
                return "teamID: integer expected";
        if (!$util.isInteger(message.action))
            return "action: integer expected";
        if (message.playerList != null && message.hasOwnProperty("playerList")) {
            if (!Array.isArray(message.playerList))
                return "playerList: array expected";
            for (var i = 0; i < message.playerList.length; ++i)
                if (!$util.isInteger(message.playerList[i]))
                    return "playerList: integer[] expected";
        }
        if (message.readyList != null && message.hasOwnProperty("readyList")) {
            if (!Array.isArray(message.readyList))
                return "readyList: array expected";
            for (var i = 0; i < message.readyList.length; ++i)
                if (!$util.isInteger(message.readyList[i]))
                    return "readyList: integer[] expected";
        }
        if (message.leaderUin != null && message.hasOwnProperty("leaderUin"))
            if (!$util.isInteger(message.leaderUin))
                return "leaderUin: integer expected";
        return null;
    };

    /**
     * Creates a RspPlayerTeamAction message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RspPlayerTeamAction
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RspPlayerTeamAction} RspPlayerTeamAction
     */
    RspPlayerTeamAction.fromObject = function fromObject(object) {
        if (object instanceof $root.RspPlayerTeamAction)
            return object;
        var message = new $root.RspPlayerTeamAction();
        if (object.resultID != null)
            message.resultID = object.resultID | 0;
        if (object.teamID != null)
            message.teamID = object.teamID | 0;
        if (object.action != null)
            message.action = object.action | 0;
        if (object.playerList) {
            if (!Array.isArray(object.playerList))
                throw TypeError(".RspPlayerTeamAction.playerList: array expected");
            message.playerList = [];
            for (var i = 0; i < object.playerList.length; ++i)
                message.playerList[i] = object.playerList[i] | 0;
        }
        if (object.readyList) {
            if (!Array.isArray(object.readyList))
                throw TypeError(".RspPlayerTeamAction.readyList: array expected");
            message.readyList = [];
            for (var i = 0; i < object.readyList.length; ++i)
                message.readyList[i] = object.readyList[i] | 0;
        }
        if (object.leaderUin != null)
            message.leaderUin = object.leaderUin | 0;
        return message;
    };

    /**
     * Creates a plain object from a RspPlayerTeamAction message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RspPlayerTeamAction
     * @static
     * @param {RspPlayerTeamAction} message RspPlayerTeamAction
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RspPlayerTeamAction.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.playerList = [];
            object.readyList = [];
        }
        if (options.defaults) {
            object.resultID = 0;
            object.teamID = 0;
            object.action = 0;
            object.leaderUin = 0;
        }
        if (message.resultID != null && message.hasOwnProperty("resultID"))
            object.resultID = message.resultID;
        if (message.teamID != null && message.hasOwnProperty("teamID"))
            object.teamID = message.teamID;
        if (message.action != null && message.hasOwnProperty("action"))
            object.action = message.action;
        if (message.playerList && message.playerList.length) {
            object.playerList = [];
            for (var j = 0; j < message.playerList.length; ++j)
                object.playerList[j] = message.playerList[j];
        }
        if (message.readyList && message.readyList.length) {
            object.readyList = [];
            for (var j = 0; j < message.readyList.length; ++j)
                object.readyList[j] = message.readyList[j];
        }
        if (message.leaderUin != null && message.hasOwnProperty("leaderUin"))
            object.leaderUin = message.leaderUin;
        return object;
    };

    /**
     * Converts this RspPlayerTeamAction to JSON.
     * @function toJSON
     * @memberof RspPlayerTeamAction
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RspPlayerTeamAction.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RspPlayerTeamAction;
})();

$root.InfPlayerTeamAction = (function() {

    /**
     * Properties of an InfPlayerTeamAction.
     * @exports IInfPlayerTeamAction
     * @interface IInfPlayerTeamAction
     * @property {number|null} [uin] InfPlayerTeamAction uin
     * @property {number} action InfPlayerTeamAction action
     * @property {number|null} [leaderUin] InfPlayerTeamAction leaderUin
     * @property {number|null} [targetSeat] InfPlayerTeamAction targetSeat
     */

    /**
     * Constructs a new InfPlayerTeamAction.
     * @exports InfPlayerTeamAction
     * @classdesc Represents an InfPlayerTeamAction.
     * @implements IInfPlayerTeamAction
     * @constructor
     * @param {IInfPlayerTeamAction=} [properties] Properties to set
     */
    function InfPlayerTeamAction(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * InfPlayerTeamAction uin.
     * @member {number} uin
     * @memberof InfPlayerTeamAction
     * @instance
     */
    InfPlayerTeamAction.prototype.uin = 0;

    /**
     * InfPlayerTeamAction action.
     * @member {number} action
     * @memberof InfPlayerTeamAction
     * @instance
     */
    InfPlayerTeamAction.prototype.action = 0;

    /**
     * InfPlayerTeamAction leaderUin.
     * @member {number} leaderUin
     * @memberof InfPlayerTeamAction
     * @instance
     */
    InfPlayerTeamAction.prototype.leaderUin = 0;

    /**
     * InfPlayerTeamAction targetSeat.
     * @member {number} targetSeat
     * @memberof InfPlayerTeamAction
     * @instance
     */
    InfPlayerTeamAction.prototype.targetSeat = 0;

    /**
     * Creates a new InfPlayerTeamAction instance using the specified properties.
     * @function create
     * @memberof InfPlayerTeamAction
     * @static
     * @param {IInfPlayerTeamAction=} [properties] Properties to set
     * @returns {InfPlayerTeamAction} InfPlayerTeamAction instance
     */
    InfPlayerTeamAction.create = function create(properties) {
        return new InfPlayerTeamAction(properties);
    };

    /**
     * Encodes the specified InfPlayerTeamAction message. Does not implicitly {@link InfPlayerTeamAction.verify|verify} messages.
     * @function encode
     * @memberof InfPlayerTeamAction
     * @static
     * @param {IInfPlayerTeamAction} message InfPlayerTeamAction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    InfPlayerTeamAction.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uin != null && message.hasOwnProperty("uin"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.uin);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.action);
        if (message.leaderUin != null && message.hasOwnProperty("leaderUin"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.leaderUin);
        if (message.targetSeat != null && message.hasOwnProperty("targetSeat"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.targetSeat);
        return writer;
    };

    /**
     * Encodes the specified InfPlayerTeamAction message, length delimited. Does not implicitly {@link InfPlayerTeamAction.verify|verify} messages.
     * @function encodeDelimited
     * @memberof InfPlayerTeamAction
     * @static
     * @param {IInfPlayerTeamAction} message InfPlayerTeamAction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    InfPlayerTeamAction.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an InfPlayerTeamAction message from the specified reader or buffer.
     * @function decode
     * @memberof InfPlayerTeamAction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {InfPlayerTeamAction} InfPlayerTeamAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    InfPlayerTeamAction.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.InfPlayerTeamAction();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.uin = reader.int32();
                break;
            case 2:
                message.action = reader.int32();
                break;
            case 3:
                message.leaderUin = reader.int32();
                break;
            case 4:
                message.targetSeat = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("action"))
            throw $util.ProtocolError("missing required 'action'", { instance: message });
        return message;
    };

    /**
     * Decodes an InfPlayerTeamAction message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof InfPlayerTeamAction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {InfPlayerTeamAction} InfPlayerTeamAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    InfPlayerTeamAction.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an InfPlayerTeamAction message.
     * @function verify
     * @memberof InfPlayerTeamAction
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    InfPlayerTeamAction.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uin != null && message.hasOwnProperty("uin"))
            if (!$util.isInteger(message.uin))
                return "uin: integer expected";
        if (!$util.isInteger(message.action))
            return "action: integer expected";
        if (message.leaderUin != null && message.hasOwnProperty("leaderUin"))
            if (!$util.isInteger(message.leaderUin))
                return "leaderUin: integer expected";
        if (message.targetSeat != null && message.hasOwnProperty("targetSeat"))
            if (!$util.isInteger(message.targetSeat))
                return "targetSeat: integer expected";
        return null;
    };

    /**
     * Creates an InfPlayerTeamAction message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof InfPlayerTeamAction
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {InfPlayerTeamAction} InfPlayerTeamAction
     */
    InfPlayerTeamAction.fromObject = function fromObject(object) {
        if (object instanceof $root.InfPlayerTeamAction)
            return object;
        var message = new $root.InfPlayerTeamAction();
        if (object.uin != null)
            message.uin = object.uin | 0;
        if (object.action != null)
            message.action = object.action | 0;
        if (object.leaderUin != null)
            message.leaderUin = object.leaderUin | 0;
        if (object.targetSeat != null)
            message.targetSeat = object.targetSeat | 0;
        return message;
    };

    /**
     * Creates a plain object from an InfPlayerTeamAction message. Also converts values to other types if specified.
     * @function toObject
     * @memberof InfPlayerTeamAction
     * @static
     * @param {InfPlayerTeamAction} message InfPlayerTeamAction
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    InfPlayerTeamAction.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.uin = 0;
            object.action = 0;
            object.leaderUin = 0;
            object.targetSeat = 0;
        }
        if (message.uin != null && message.hasOwnProperty("uin"))
            object.uin = message.uin;
        if (message.action != null && message.hasOwnProperty("action"))
            object.action = message.action;
        if (message.leaderUin != null && message.hasOwnProperty("leaderUin"))
            object.leaderUin = message.leaderUin;
        if (message.targetSeat != null && message.hasOwnProperty("targetSeat"))
            object.targetSeat = message.targetSeat;
        return object;
    };

    /**
     * Converts this InfPlayerTeamAction to JSON.
     * @function toJSON
     * @memberof InfPlayerTeamAction
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    InfPlayerTeamAction.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return InfPlayerTeamAction;
})();

$root.ReqPlayerMatch = (function() {

    /**
     * Properties of a ReqPlayerMatch.
     * @exports IReqPlayerMatch
     * @interface IReqPlayerMatch
     * @property {number} operation ReqPlayerMatch operation
     * @property {number} type ReqPlayerMatch type
     */

    /**
     * Constructs a new ReqPlayerMatch.
     * @exports ReqPlayerMatch
     * @classdesc Represents a ReqPlayerMatch.
     * @implements IReqPlayerMatch
     * @constructor
     * @param {IReqPlayerMatch=} [properties] Properties to set
     */
    function ReqPlayerMatch(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ReqPlayerMatch operation.
     * @member {number} operation
     * @memberof ReqPlayerMatch
     * @instance
     */
    ReqPlayerMatch.prototype.operation = 0;

    /**
     * ReqPlayerMatch type.
     * @member {number} type
     * @memberof ReqPlayerMatch
     * @instance
     */
    ReqPlayerMatch.prototype.type = 0;

    /**
     * Creates a new ReqPlayerMatch instance using the specified properties.
     * @function create
     * @memberof ReqPlayerMatch
     * @static
     * @param {IReqPlayerMatch=} [properties] Properties to set
     * @returns {ReqPlayerMatch} ReqPlayerMatch instance
     */
    ReqPlayerMatch.create = function create(properties) {
        return new ReqPlayerMatch(properties);
    };

    /**
     * Encodes the specified ReqPlayerMatch message. Does not implicitly {@link ReqPlayerMatch.verify|verify} messages.
     * @function encode
     * @memberof ReqPlayerMatch
     * @static
     * @param {IReqPlayerMatch} message ReqPlayerMatch message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqPlayerMatch.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.operation);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
        return writer;
    };

    /**
     * Encodes the specified ReqPlayerMatch message, length delimited. Does not implicitly {@link ReqPlayerMatch.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqPlayerMatch
     * @static
     * @param {IReqPlayerMatch} message ReqPlayerMatch message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqPlayerMatch.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReqPlayerMatch message from the specified reader or buffer.
     * @function decode
     * @memberof ReqPlayerMatch
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqPlayerMatch} ReqPlayerMatch
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqPlayerMatch.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqPlayerMatch();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.operation = reader.int32();
                break;
            case 2:
                message.type = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("operation"))
            throw $util.ProtocolError("missing required 'operation'", { instance: message });
        if (!message.hasOwnProperty("type"))
            throw $util.ProtocolError("missing required 'type'", { instance: message });
        return message;
    };

    /**
     * Decodes a ReqPlayerMatch message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqPlayerMatch
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqPlayerMatch} ReqPlayerMatch
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqPlayerMatch.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReqPlayerMatch message.
     * @function verify
     * @memberof ReqPlayerMatch
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqPlayerMatch.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.operation))
            return "operation: integer expected";
        if (!$util.isInteger(message.type))
            return "type: integer expected";
        return null;
    };

    /**
     * Creates a ReqPlayerMatch message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqPlayerMatch
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqPlayerMatch} ReqPlayerMatch
     */
    ReqPlayerMatch.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqPlayerMatch)
            return object;
        var message = new $root.ReqPlayerMatch();
        if (object.operation != null)
            message.operation = object.operation | 0;
        if (object.type != null)
            message.type = object.type | 0;
        return message;
    };

    /**
     * Creates a plain object from a ReqPlayerMatch message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqPlayerMatch
     * @static
     * @param {ReqPlayerMatch} message ReqPlayerMatch
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqPlayerMatch.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.operation = 0;
            object.type = 0;
        }
        if (message.operation != null && message.hasOwnProperty("operation"))
            object.operation = message.operation;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        return object;
    };

    /**
     * Converts this ReqPlayerMatch to JSON.
     * @function toJSON
     * @memberof ReqPlayerMatch
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqPlayerMatch.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ReqPlayerMatch;
})();

$root.InfPlayerMatch = (function() {

    /**
     * Properties of an InfPlayerMatch.
     * @exports IInfPlayerMatch
     * @interface IInfPlayerMatch
     * @property {number} operation InfPlayerMatch operation
     * @property {number} type InfPlayerMatch type
     */

    /**
     * Constructs a new InfPlayerMatch.
     * @exports InfPlayerMatch
     * @classdesc Represents an InfPlayerMatch.
     * @implements IInfPlayerMatch
     * @constructor
     * @param {IInfPlayerMatch=} [properties] Properties to set
     */
    function InfPlayerMatch(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * InfPlayerMatch operation.
     * @member {number} operation
     * @memberof InfPlayerMatch
     * @instance
     */
    InfPlayerMatch.prototype.operation = 0;

    /**
     * InfPlayerMatch type.
     * @member {number} type
     * @memberof InfPlayerMatch
     * @instance
     */
    InfPlayerMatch.prototype.type = 0;

    /**
     * Creates a new InfPlayerMatch instance using the specified properties.
     * @function create
     * @memberof InfPlayerMatch
     * @static
     * @param {IInfPlayerMatch=} [properties] Properties to set
     * @returns {InfPlayerMatch} InfPlayerMatch instance
     */
    InfPlayerMatch.create = function create(properties) {
        return new InfPlayerMatch(properties);
    };

    /**
     * Encodes the specified InfPlayerMatch message. Does not implicitly {@link InfPlayerMatch.verify|verify} messages.
     * @function encode
     * @memberof InfPlayerMatch
     * @static
     * @param {IInfPlayerMatch} message InfPlayerMatch message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    InfPlayerMatch.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.operation);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
        return writer;
    };

    /**
     * Encodes the specified InfPlayerMatch message, length delimited. Does not implicitly {@link InfPlayerMatch.verify|verify} messages.
     * @function encodeDelimited
     * @memberof InfPlayerMatch
     * @static
     * @param {IInfPlayerMatch} message InfPlayerMatch message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    InfPlayerMatch.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an InfPlayerMatch message from the specified reader or buffer.
     * @function decode
     * @memberof InfPlayerMatch
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {InfPlayerMatch} InfPlayerMatch
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    InfPlayerMatch.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.InfPlayerMatch();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.operation = reader.int32();
                break;
            case 2:
                message.type = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("operation"))
            throw $util.ProtocolError("missing required 'operation'", { instance: message });
        if (!message.hasOwnProperty("type"))
            throw $util.ProtocolError("missing required 'type'", { instance: message });
        return message;
    };

    /**
     * Decodes an InfPlayerMatch message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof InfPlayerMatch
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {InfPlayerMatch} InfPlayerMatch
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    InfPlayerMatch.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an InfPlayerMatch message.
     * @function verify
     * @memberof InfPlayerMatch
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    InfPlayerMatch.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.operation))
            return "operation: integer expected";
        if (!$util.isInteger(message.type))
            return "type: integer expected";
        return null;
    };

    /**
     * Creates an InfPlayerMatch message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof InfPlayerMatch
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {InfPlayerMatch} InfPlayerMatch
     */
    InfPlayerMatch.fromObject = function fromObject(object) {
        if (object instanceof $root.InfPlayerMatch)
            return object;
        var message = new $root.InfPlayerMatch();
        if (object.operation != null)
            message.operation = object.operation | 0;
        if (object.type != null)
            message.type = object.type | 0;
        return message;
    };

    /**
     * Creates a plain object from an InfPlayerMatch message. Also converts values to other types if specified.
     * @function toObject
     * @memberof InfPlayerMatch
     * @static
     * @param {InfPlayerMatch} message InfPlayerMatch
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    InfPlayerMatch.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.operation = 0;
            object.type = 0;
        }
        if (message.operation != null && message.hasOwnProperty("operation"))
            object.operation = message.operation;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        return object;
    };

    /**
     * Converts this InfPlayerMatch to JSON.
     * @function toJSON
     * @memberof InfPlayerMatch
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    InfPlayerMatch.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return InfPlayerMatch;
})();

$root.TeamDetail = (function() {

    /**
     * Properties of a TeamDetail.
     * @exports ITeamDetail
     * @interface ITeamDetail
     * @property {number} teamID TeamDetail teamID
     * @property {Array.<number>|null} [playerList] TeamDetail playerList
     */

    /**
     * Constructs a new TeamDetail.
     * @exports TeamDetail
     * @classdesc Represents a TeamDetail.
     * @implements ITeamDetail
     * @constructor
     * @param {ITeamDetail=} [properties] Properties to set
     */
    function TeamDetail(properties) {
        this.playerList = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TeamDetail teamID.
     * @member {number} teamID
     * @memberof TeamDetail
     * @instance
     */
    TeamDetail.prototype.teamID = 0;

    /**
     * TeamDetail playerList.
     * @member {Array.<number>} playerList
     * @memberof TeamDetail
     * @instance
     */
    TeamDetail.prototype.playerList = $util.emptyArray;

    /**
     * Creates a new TeamDetail instance using the specified properties.
     * @function create
     * @memberof TeamDetail
     * @static
     * @param {ITeamDetail=} [properties] Properties to set
     * @returns {TeamDetail} TeamDetail instance
     */
    TeamDetail.create = function create(properties) {
        return new TeamDetail(properties);
    };

    /**
     * Encodes the specified TeamDetail message. Does not implicitly {@link TeamDetail.verify|verify} messages.
     * @function encode
     * @memberof TeamDetail
     * @static
     * @param {ITeamDetail} message TeamDetail message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TeamDetail.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.teamID);
        if (message.playerList != null && message.playerList.length)
            for (var i = 0; i < message.playerList.length; ++i)
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.playerList[i]);
        return writer;
    };

    /**
     * Encodes the specified TeamDetail message, length delimited. Does not implicitly {@link TeamDetail.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TeamDetail
     * @static
     * @param {ITeamDetail} message TeamDetail message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TeamDetail.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TeamDetail message from the specified reader or buffer.
     * @function decode
     * @memberof TeamDetail
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TeamDetail} TeamDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TeamDetail.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TeamDetail();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.teamID = reader.int32();
                break;
            case 2:
                if (!(message.playerList && message.playerList.length))
                    message.playerList = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.playerList.push(reader.int32());
                } else
                    message.playerList.push(reader.int32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("teamID"))
            throw $util.ProtocolError("missing required 'teamID'", { instance: message });
        return message;
    };

    /**
     * Decodes a TeamDetail message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TeamDetail
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TeamDetail} TeamDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TeamDetail.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TeamDetail message.
     * @function verify
     * @memberof TeamDetail
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TeamDetail.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.teamID))
            return "teamID: integer expected";
        if (message.playerList != null && message.hasOwnProperty("playerList")) {
            if (!Array.isArray(message.playerList))
                return "playerList: array expected";
            for (var i = 0; i < message.playerList.length; ++i)
                if (!$util.isInteger(message.playerList[i]))
                    return "playerList: integer[] expected";
        }
        return null;
    };

    /**
     * Creates a TeamDetail message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TeamDetail
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TeamDetail} TeamDetail
     */
    TeamDetail.fromObject = function fromObject(object) {
        if (object instanceof $root.TeamDetail)
            return object;
        var message = new $root.TeamDetail();
        if (object.teamID != null)
            message.teamID = object.teamID | 0;
        if (object.playerList) {
            if (!Array.isArray(object.playerList))
                throw TypeError(".TeamDetail.playerList: array expected");
            message.playerList = [];
            for (var i = 0; i < object.playerList.length; ++i)
                message.playerList[i] = object.playerList[i] | 0;
        }
        return message;
    };

    /**
     * Creates a plain object from a TeamDetail message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TeamDetail
     * @static
     * @param {TeamDetail} message TeamDetail
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TeamDetail.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.playerList = [];
        if (options.defaults)
            object.teamID = 0;
        if (message.teamID != null && message.hasOwnProperty("teamID"))
            object.teamID = message.teamID;
        if (message.playerList && message.playerList.length) {
            object.playerList = [];
            for (var j = 0; j < message.playerList.length; ++j)
                object.playerList[j] = message.playerList[j];
        }
        return object;
    };

    /**
     * Converts this TeamDetail to JSON.
     * @function toJSON
     * @memberof TeamDetail
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TeamDetail.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return TeamDetail;
})();

$root.InfPlayerMatchSuccess = (function() {

    /**
     * Properties of an InfPlayerMatchSuccess.
     * @exports IInfPlayerMatchSuccess
     * @interface IInfPlayerMatchSuccess
     * @property {number} tableID InfPlayerMatchSuccess tableID
     * @property {Array.<ITeamDetail>|null} [teamList] InfPlayerMatchSuccess teamList
     */

    /**
     * Constructs a new InfPlayerMatchSuccess.
     * @exports InfPlayerMatchSuccess
     * @classdesc Represents an InfPlayerMatchSuccess.
     * @implements IInfPlayerMatchSuccess
     * @constructor
     * @param {IInfPlayerMatchSuccess=} [properties] Properties to set
     */
    function InfPlayerMatchSuccess(properties) {
        this.teamList = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * InfPlayerMatchSuccess tableID.
     * @member {number} tableID
     * @memberof InfPlayerMatchSuccess
     * @instance
     */
    InfPlayerMatchSuccess.prototype.tableID = 0;

    /**
     * InfPlayerMatchSuccess teamList.
     * @member {Array.<ITeamDetail>} teamList
     * @memberof InfPlayerMatchSuccess
     * @instance
     */
    InfPlayerMatchSuccess.prototype.teamList = $util.emptyArray;

    /**
     * Creates a new InfPlayerMatchSuccess instance using the specified properties.
     * @function create
     * @memberof InfPlayerMatchSuccess
     * @static
     * @param {IInfPlayerMatchSuccess=} [properties] Properties to set
     * @returns {InfPlayerMatchSuccess} InfPlayerMatchSuccess instance
     */
    InfPlayerMatchSuccess.create = function create(properties) {
        return new InfPlayerMatchSuccess(properties);
    };

    /**
     * Encodes the specified InfPlayerMatchSuccess message. Does not implicitly {@link InfPlayerMatchSuccess.verify|verify} messages.
     * @function encode
     * @memberof InfPlayerMatchSuccess
     * @static
     * @param {IInfPlayerMatchSuccess} message InfPlayerMatchSuccess message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    InfPlayerMatchSuccess.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.tableID);
        if (message.teamList != null && message.teamList.length)
            for (var i = 0; i < message.teamList.length; ++i)
                $root.TeamDetail.encode(message.teamList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified InfPlayerMatchSuccess message, length delimited. Does not implicitly {@link InfPlayerMatchSuccess.verify|verify} messages.
     * @function encodeDelimited
     * @memberof InfPlayerMatchSuccess
     * @static
     * @param {IInfPlayerMatchSuccess} message InfPlayerMatchSuccess message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    InfPlayerMatchSuccess.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an InfPlayerMatchSuccess message from the specified reader or buffer.
     * @function decode
     * @memberof InfPlayerMatchSuccess
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {InfPlayerMatchSuccess} InfPlayerMatchSuccess
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    InfPlayerMatchSuccess.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.InfPlayerMatchSuccess();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.tableID = reader.int32();
                break;
            case 2:
                if (!(message.teamList && message.teamList.length))
                    message.teamList = [];
                message.teamList.push($root.TeamDetail.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("tableID"))
            throw $util.ProtocolError("missing required 'tableID'", { instance: message });
        return message;
    };

    /**
     * Decodes an InfPlayerMatchSuccess message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof InfPlayerMatchSuccess
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {InfPlayerMatchSuccess} InfPlayerMatchSuccess
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    InfPlayerMatchSuccess.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an InfPlayerMatchSuccess message.
     * @function verify
     * @memberof InfPlayerMatchSuccess
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    InfPlayerMatchSuccess.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.tableID))
            return "tableID: integer expected";
        if (message.teamList != null && message.hasOwnProperty("teamList")) {
            if (!Array.isArray(message.teamList))
                return "teamList: array expected";
            for (var i = 0; i < message.teamList.length; ++i) {
                var error = $root.TeamDetail.verify(message.teamList[i]);
                if (error)
                    return "teamList." + error;
            }
        }
        return null;
    };

    /**
     * Creates an InfPlayerMatchSuccess message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof InfPlayerMatchSuccess
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {InfPlayerMatchSuccess} InfPlayerMatchSuccess
     */
    InfPlayerMatchSuccess.fromObject = function fromObject(object) {
        if (object instanceof $root.InfPlayerMatchSuccess)
            return object;
        var message = new $root.InfPlayerMatchSuccess();
        if (object.tableID != null)
            message.tableID = object.tableID | 0;
        if (object.teamList) {
            if (!Array.isArray(object.teamList))
                throw TypeError(".InfPlayerMatchSuccess.teamList: array expected");
            message.teamList = [];
            for (var i = 0; i < object.teamList.length; ++i) {
                if (typeof object.teamList[i] !== "object")
                    throw TypeError(".InfPlayerMatchSuccess.teamList: object expected");
                message.teamList[i] = $root.TeamDetail.fromObject(object.teamList[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from an InfPlayerMatchSuccess message. Also converts values to other types if specified.
     * @function toObject
     * @memberof InfPlayerMatchSuccess
     * @static
     * @param {InfPlayerMatchSuccess} message InfPlayerMatchSuccess
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    InfPlayerMatchSuccess.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.teamList = [];
        if (options.defaults)
            object.tableID = 0;
        if (message.tableID != null && message.hasOwnProperty("tableID"))
            object.tableID = message.tableID;
        if (message.teamList && message.teamList.length) {
            object.teamList = [];
            for (var j = 0; j < message.teamList.length; ++j)
                object.teamList[j] = $root.TeamDetail.toObject(message.teamList[j], options);
        }
        return object;
    };

    /**
     * Converts this InfPlayerMatchSuccess to JSON.
     * @function toJSON
     * @memberof InfPlayerMatchSuccess
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    InfPlayerMatchSuccess.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return InfPlayerMatchSuccess;
})();

$root.ReqPlayerStartGame = (function() {

    /**
     * Properties of a ReqPlayerStartGame.
     * @exports IReqPlayerStartGame
     * @interface IReqPlayerStartGame
     */

    /**
     * Constructs a new ReqPlayerStartGame.
     * @exports ReqPlayerStartGame
     * @classdesc Represents a ReqPlayerStartGame.
     * @implements IReqPlayerStartGame
     * @constructor
     * @param {IReqPlayerStartGame=} [properties] Properties to set
     */
    function ReqPlayerStartGame(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new ReqPlayerStartGame instance using the specified properties.
     * @function create
     * @memberof ReqPlayerStartGame
     * @static
     * @param {IReqPlayerStartGame=} [properties] Properties to set
     * @returns {ReqPlayerStartGame} ReqPlayerStartGame instance
     */
    ReqPlayerStartGame.create = function create(properties) {
        return new ReqPlayerStartGame(properties);
    };

    /**
     * Encodes the specified ReqPlayerStartGame message. Does not implicitly {@link ReqPlayerStartGame.verify|verify} messages.
     * @function encode
     * @memberof ReqPlayerStartGame
     * @static
     * @param {IReqPlayerStartGame} message ReqPlayerStartGame message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqPlayerStartGame.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified ReqPlayerStartGame message, length delimited. Does not implicitly {@link ReqPlayerStartGame.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqPlayerStartGame
     * @static
     * @param {IReqPlayerStartGame} message ReqPlayerStartGame message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqPlayerStartGame.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReqPlayerStartGame message from the specified reader or buffer.
     * @function decode
     * @memberof ReqPlayerStartGame
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqPlayerStartGame} ReqPlayerStartGame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqPlayerStartGame.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqPlayerStartGame();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ReqPlayerStartGame message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqPlayerStartGame
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqPlayerStartGame} ReqPlayerStartGame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqPlayerStartGame.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReqPlayerStartGame message.
     * @function verify
     * @memberof ReqPlayerStartGame
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqPlayerStartGame.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a ReqPlayerStartGame message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqPlayerStartGame
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqPlayerStartGame} ReqPlayerStartGame
     */
    ReqPlayerStartGame.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqPlayerStartGame)
            return object;
        return new $root.ReqPlayerStartGame();
    };

    /**
     * Creates a plain object from a ReqPlayerStartGame message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqPlayerStartGame
     * @static
     * @param {ReqPlayerStartGame} message ReqPlayerStartGame
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqPlayerStartGame.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this ReqPlayerStartGame to JSON.
     * @function toJSON
     * @memberof ReqPlayerStartGame
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqPlayerStartGame.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ReqPlayerStartGame;
})();

$root.InfPlayerStartGame = (function() {

    /**
     * Properties of an InfPlayerStartGame.
     * @exports IInfPlayerStartGame
     * @interface IInfPlayerStartGame
     */

    /**
     * Constructs a new InfPlayerStartGame.
     * @exports InfPlayerStartGame
     * @classdesc Represents an InfPlayerStartGame.
     * @implements IInfPlayerStartGame
     * @constructor
     * @param {IInfPlayerStartGame=} [properties] Properties to set
     */
    function InfPlayerStartGame(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new InfPlayerStartGame instance using the specified properties.
     * @function create
     * @memberof InfPlayerStartGame
     * @static
     * @param {IInfPlayerStartGame=} [properties] Properties to set
     * @returns {InfPlayerStartGame} InfPlayerStartGame instance
     */
    InfPlayerStartGame.create = function create(properties) {
        return new InfPlayerStartGame(properties);
    };

    /**
     * Encodes the specified InfPlayerStartGame message. Does not implicitly {@link InfPlayerStartGame.verify|verify} messages.
     * @function encode
     * @memberof InfPlayerStartGame
     * @static
     * @param {IInfPlayerStartGame} message InfPlayerStartGame message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    InfPlayerStartGame.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified InfPlayerStartGame message, length delimited. Does not implicitly {@link InfPlayerStartGame.verify|verify} messages.
     * @function encodeDelimited
     * @memberof InfPlayerStartGame
     * @static
     * @param {IInfPlayerStartGame} message InfPlayerStartGame message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    InfPlayerStartGame.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an InfPlayerStartGame message from the specified reader or buffer.
     * @function decode
     * @memberof InfPlayerStartGame
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {InfPlayerStartGame} InfPlayerStartGame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    InfPlayerStartGame.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.InfPlayerStartGame();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an InfPlayerStartGame message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof InfPlayerStartGame
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {InfPlayerStartGame} InfPlayerStartGame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    InfPlayerStartGame.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an InfPlayerStartGame message.
     * @function verify
     * @memberof InfPlayerStartGame
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    InfPlayerStartGame.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates an InfPlayerStartGame message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof InfPlayerStartGame
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {InfPlayerStartGame} InfPlayerStartGame
     */
    InfPlayerStartGame.fromObject = function fromObject(object) {
        if (object instanceof $root.InfPlayerStartGame)
            return object;
        return new $root.InfPlayerStartGame();
    };

    /**
     * Creates a plain object from an InfPlayerStartGame message. Also converts values to other types if specified.
     * @function toObject
     * @memberof InfPlayerStartGame
     * @static
     * @param {InfPlayerStartGame} message InfPlayerStartGame
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    InfPlayerStartGame.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this InfPlayerStartGame to JSON.
     * @function toJSON
     * @memberof InfPlayerStartGame
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    InfPlayerStartGame.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return InfPlayerStartGame;
})();

$root.ReqPlayerEndGame = (function() {

    /**
     * Properties of a ReqPlayerEndGame.
     * @exports IReqPlayerEndGame
     * @interface IReqPlayerEndGame
     * @property {number} rank ReqPlayerEndGame rank
     */

    /**
     * Constructs a new ReqPlayerEndGame.
     * @exports ReqPlayerEndGame
     * @classdesc Represents a ReqPlayerEndGame.
     * @implements IReqPlayerEndGame
     * @constructor
     * @param {IReqPlayerEndGame=} [properties] Properties to set
     */
    function ReqPlayerEndGame(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ReqPlayerEndGame rank.
     * @member {number} rank
     * @memberof ReqPlayerEndGame
     * @instance
     */
    ReqPlayerEndGame.prototype.rank = 0;

    /**
     * Creates a new ReqPlayerEndGame instance using the specified properties.
     * @function create
     * @memberof ReqPlayerEndGame
     * @static
     * @param {IReqPlayerEndGame=} [properties] Properties to set
     * @returns {ReqPlayerEndGame} ReqPlayerEndGame instance
     */
    ReqPlayerEndGame.create = function create(properties) {
        return new ReqPlayerEndGame(properties);
    };

    /**
     * Encodes the specified ReqPlayerEndGame message. Does not implicitly {@link ReqPlayerEndGame.verify|verify} messages.
     * @function encode
     * @memberof ReqPlayerEndGame
     * @static
     * @param {IReqPlayerEndGame} message ReqPlayerEndGame message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqPlayerEndGame.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.rank);
        return writer;
    };

    /**
     * Encodes the specified ReqPlayerEndGame message, length delimited. Does not implicitly {@link ReqPlayerEndGame.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqPlayerEndGame
     * @static
     * @param {IReqPlayerEndGame} message ReqPlayerEndGame message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqPlayerEndGame.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReqPlayerEndGame message from the specified reader or buffer.
     * @function decode
     * @memberof ReqPlayerEndGame
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqPlayerEndGame} ReqPlayerEndGame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqPlayerEndGame.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqPlayerEndGame();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.rank = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("rank"))
            throw $util.ProtocolError("missing required 'rank'", { instance: message });
        return message;
    };

    /**
     * Decodes a ReqPlayerEndGame message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqPlayerEndGame
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqPlayerEndGame} ReqPlayerEndGame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqPlayerEndGame.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReqPlayerEndGame message.
     * @function verify
     * @memberof ReqPlayerEndGame
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqPlayerEndGame.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.rank))
            return "rank: integer expected";
        return null;
    };

    /**
     * Creates a ReqPlayerEndGame message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqPlayerEndGame
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqPlayerEndGame} ReqPlayerEndGame
     */
    ReqPlayerEndGame.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqPlayerEndGame)
            return object;
        var message = new $root.ReqPlayerEndGame();
        if (object.rank != null)
            message.rank = object.rank | 0;
        return message;
    };

    /**
     * Creates a plain object from a ReqPlayerEndGame message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqPlayerEndGame
     * @static
     * @param {ReqPlayerEndGame} message ReqPlayerEndGame
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqPlayerEndGame.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.rank = 0;
        if (message.rank != null && message.hasOwnProperty("rank"))
            object.rank = message.rank;
        return object;
    };

    /**
     * Converts this ReqPlayerEndGame to JSON.
     * @function toJSON
     * @memberof ReqPlayerEndGame
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqPlayerEndGame.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ReqPlayerEndGame;
})();

$root.InfPlayerEndGame = (function() {

    /**
     * Properties of an InfPlayerEndGame.
     * @exports IInfPlayerEndGame
     * @interface IInfPlayerEndGame
     */

    /**
     * Constructs a new InfPlayerEndGame.
     * @exports InfPlayerEndGame
     * @classdesc Represents an InfPlayerEndGame.
     * @implements IInfPlayerEndGame
     * @constructor
     * @param {IInfPlayerEndGame=} [properties] Properties to set
     */
    function InfPlayerEndGame(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new InfPlayerEndGame instance using the specified properties.
     * @function create
     * @memberof InfPlayerEndGame
     * @static
     * @param {IInfPlayerEndGame=} [properties] Properties to set
     * @returns {InfPlayerEndGame} InfPlayerEndGame instance
     */
    InfPlayerEndGame.create = function create(properties) {
        return new InfPlayerEndGame(properties);
    };

    /**
     * Encodes the specified InfPlayerEndGame message. Does not implicitly {@link InfPlayerEndGame.verify|verify} messages.
     * @function encode
     * @memberof InfPlayerEndGame
     * @static
     * @param {IInfPlayerEndGame} message InfPlayerEndGame message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    InfPlayerEndGame.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified InfPlayerEndGame message, length delimited. Does not implicitly {@link InfPlayerEndGame.verify|verify} messages.
     * @function encodeDelimited
     * @memberof InfPlayerEndGame
     * @static
     * @param {IInfPlayerEndGame} message InfPlayerEndGame message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    InfPlayerEndGame.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an InfPlayerEndGame message from the specified reader or buffer.
     * @function decode
     * @memberof InfPlayerEndGame
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {InfPlayerEndGame} InfPlayerEndGame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    InfPlayerEndGame.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.InfPlayerEndGame();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an InfPlayerEndGame message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof InfPlayerEndGame
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {InfPlayerEndGame} InfPlayerEndGame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    InfPlayerEndGame.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an InfPlayerEndGame message.
     * @function verify
     * @memberof InfPlayerEndGame
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    InfPlayerEndGame.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates an InfPlayerEndGame message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof InfPlayerEndGame
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {InfPlayerEndGame} InfPlayerEndGame
     */
    InfPlayerEndGame.fromObject = function fromObject(object) {
        if (object instanceof $root.InfPlayerEndGame)
            return object;
        return new $root.InfPlayerEndGame();
    };

    /**
     * Creates a plain object from an InfPlayerEndGame message. Also converts values to other types if specified.
     * @function toObject
     * @memberof InfPlayerEndGame
     * @static
     * @param {InfPlayerEndGame} message InfPlayerEndGame
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    InfPlayerEndGame.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this InfPlayerEndGame to JSON.
     * @function toJSON
     * @memberof InfPlayerEndGame
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    InfPlayerEndGame.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return InfPlayerEndGame;
})();

$root.ReqPlayerGameData = (function() {

    /**
     * Properties of a ReqPlayerGameData.
     * @exports IReqPlayerGameData
     * @interface IReqPlayerGameData
     */

    /**
     * Constructs a new ReqPlayerGameData.
     * @exports ReqPlayerGameData
     * @classdesc Represents a ReqPlayerGameData.
     * @implements IReqPlayerGameData
     * @constructor
     * @param {IReqPlayerGameData=} [properties] Properties to set
     */
    function ReqPlayerGameData(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new ReqPlayerGameData instance using the specified properties.
     * @function create
     * @memberof ReqPlayerGameData
     * @static
     * @param {IReqPlayerGameData=} [properties] Properties to set
     * @returns {ReqPlayerGameData} ReqPlayerGameData instance
     */
    ReqPlayerGameData.create = function create(properties) {
        return new ReqPlayerGameData(properties);
    };

    /**
     * Encodes the specified ReqPlayerGameData message. Does not implicitly {@link ReqPlayerGameData.verify|verify} messages.
     * @function encode
     * @memberof ReqPlayerGameData
     * @static
     * @param {IReqPlayerGameData} message ReqPlayerGameData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqPlayerGameData.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified ReqPlayerGameData message, length delimited. Does not implicitly {@link ReqPlayerGameData.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqPlayerGameData
     * @static
     * @param {IReqPlayerGameData} message ReqPlayerGameData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqPlayerGameData.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReqPlayerGameData message from the specified reader or buffer.
     * @function decode
     * @memberof ReqPlayerGameData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqPlayerGameData} ReqPlayerGameData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqPlayerGameData.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqPlayerGameData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ReqPlayerGameData message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqPlayerGameData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqPlayerGameData} ReqPlayerGameData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqPlayerGameData.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReqPlayerGameData message.
     * @function verify
     * @memberof ReqPlayerGameData
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqPlayerGameData.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a ReqPlayerGameData message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqPlayerGameData
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqPlayerGameData} ReqPlayerGameData
     */
    ReqPlayerGameData.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqPlayerGameData)
            return object;
        return new $root.ReqPlayerGameData();
    };

    /**
     * Creates a plain object from a ReqPlayerGameData message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqPlayerGameData
     * @static
     * @param {ReqPlayerGameData} message ReqPlayerGameData
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqPlayerGameData.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this ReqPlayerGameData to JSON.
     * @function toJSON
     * @memberof ReqPlayerGameData
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqPlayerGameData.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ReqPlayerGameData;
})();

$root.InfPlayerGameData = (function() {

    /**
     * Properties of an InfPlayerGameData.
     * @exports IInfPlayerGameData
     * @interface IInfPlayerGameData
     */

    /**
     * Constructs a new InfPlayerGameData.
     * @exports InfPlayerGameData
     * @classdesc Represents an InfPlayerGameData.
     * @implements IInfPlayerGameData
     * @constructor
     * @param {IInfPlayerGameData=} [properties] Properties to set
     */
    function InfPlayerGameData(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new InfPlayerGameData instance using the specified properties.
     * @function create
     * @memberof InfPlayerGameData
     * @static
     * @param {IInfPlayerGameData=} [properties] Properties to set
     * @returns {InfPlayerGameData} InfPlayerGameData instance
     */
    InfPlayerGameData.create = function create(properties) {
        return new InfPlayerGameData(properties);
    };

    /**
     * Encodes the specified InfPlayerGameData message. Does not implicitly {@link InfPlayerGameData.verify|verify} messages.
     * @function encode
     * @memberof InfPlayerGameData
     * @static
     * @param {IInfPlayerGameData} message InfPlayerGameData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    InfPlayerGameData.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified InfPlayerGameData message, length delimited. Does not implicitly {@link InfPlayerGameData.verify|verify} messages.
     * @function encodeDelimited
     * @memberof InfPlayerGameData
     * @static
     * @param {IInfPlayerGameData} message InfPlayerGameData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    InfPlayerGameData.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an InfPlayerGameData message from the specified reader or buffer.
     * @function decode
     * @memberof InfPlayerGameData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {InfPlayerGameData} InfPlayerGameData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    InfPlayerGameData.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.InfPlayerGameData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an InfPlayerGameData message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof InfPlayerGameData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {InfPlayerGameData} InfPlayerGameData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    InfPlayerGameData.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an InfPlayerGameData message.
     * @function verify
     * @memberof InfPlayerGameData
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    InfPlayerGameData.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates an InfPlayerGameData message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof InfPlayerGameData
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {InfPlayerGameData} InfPlayerGameData
     */
    InfPlayerGameData.fromObject = function fromObject(object) {
        if (object instanceof $root.InfPlayerGameData)
            return object;
        return new $root.InfPlayerGameData();
    };

    /**
     * Creates a plain object from an InfPlayerGameData message. Also converts values to other types if specified.
     * @function toObject
     * @memberof InfPlayerGameData
     * @static
     * @param {InfPlayerGameData} message InfPlayerGameData
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    InfPlayerGameData.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this InfPlayerGameData to JSON.
     * @function toJSON
     * @memberof InfPlayerGameData
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    InfPlayerGameData.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return InfPlayerGameData;
})();

$root.PlayerOption = (function() {

    /**
     * Properties of a PlayerOption.
     * @exports IPlayerOption
     * @interface IPlayerOption
     * @property {number} uin PlayerOption uin
     * @property {number} option PlayerOption option
     */

    /**
     * Constructs a new PlayerOption.
     * @exports PlayerOption
     * @classdesc Represents a PlayerOption.
     * @implements IPlayerOption
     * @constructor
     * @param {IPlayerOption=} [properties] Properties to set
     */
    function PlayerOption(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PlayerOption uin.
     * @member {number} uin
     * @memberof PlayerOption
     * @instance
     */
    PlayerOption.prototype.uin = 0;

    /**
     * PlayerOption option.
     * @member {number} option
     * @memberof PlayerOption
     * @instance
     */
    PlayerOption.prototype.option = 0;

    /**
     * Creates a new PlayerOption instance using the specified properties.
     * @function create
     * @memberof PlayerOption
     * @static
     * @param {IPlayerOption=} [properties] Properties to set
     * @returns {PlayerOption} PlayerOption instance
     */
    PlayerOption.create = function create(properties) {
        return new PlayerOption(properties);
    };

    /**
     * Encodes the specified PlayerOption message. Does not implicitly {@link PlayerOption.verify|verify} messages.
     * @function encode
     * @memberof PlayerOption
     * @static
     * @param {IPlayerOption} message PlayerOption message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlayerOption.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.uin);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.option);
        return writer;
    };

    /**
     * Encodes the specified PlayerOption message, length delimited. Does not implicitly {@link PlayerOption.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PlayerOption
     * @static
     * @param {IPlayerOption} message PlayerOption message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlayerOption.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PlayerOption message from the specified reader or buffer.
     * @function decode
     * @memberof PlayerOption
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PlayerOption} PlayerOption
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlayerOption.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlayerOption();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.uin = reader.int32();
                break;
            case 2:
                message.option = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("uin"))
            throw $util.ProtocolError("missing required 'uin'", { instance: message });
        if (!message.hasOwnProperty("option"))
            throw $util.ProtocolError("missing required 'option'", { instance: message });
        return message;
    };

    /**
     * Decodes a PlayerOption message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PlayerOption
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PlayerOption} PlayerOption
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlayerOption.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PlayerOption message.
     * @function verify
     * @memberof PlayerOption
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PlayerOption.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.uin))
            return "uin: integer expected";
        if (!$util.isInteger(message.option))
            return "option: integer expected";
        return null;
    };

    /**
     * Creates a PlayerOption message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PlayerOption
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PlayerOption} PlayerOption
     */
    PlayerOption.fromObject = function fromObject(object) {
        if (object instanceof $root.PlayerOption)
            return object;
        var message = new $root.PlayerOption();
        if (object.uin != null)
            message.uin = object.uin | 0;
        if (object.option != null)
            message.option = object.option | 0;
        return message;
    };

    /**
     * Creates a plain object from a PlayerOption message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PlayerOption
     * @static
     * @param {PlayerOption} message PlayerOption
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PlayerOption.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.uin = 0;
            object.option = 0;
        }
        if (message.uin != null && message.hasOwnProperty("uin"))
            object.uin = message.uin;
        if (message.option != null && message.hasOwnProperty("option"))
            object.option = message.option;
        return object;
    };

    /**
     * Converts this PlayerOption to JSON.
     * @function toJSON
     * @memberof PlayerOption
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PlayerOption.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PlayerOption;
})();

$root.ReqPlayerStepLock = (function() {

    /**
     * Properties of a ReqPlayerStepLock.
     * @exports IReqPlayerStepLock
     * @interface IReqPlayerStepLock
     * @property {Array.<IPlayerOption>|null} [optionList] ReqPlayerStepLock optionList
     */

    /**
     * Constructs a new ReqPlayerStepLock.
     * @exports ReqPlayerStepLock
     * @classdesc Represents a ReqPlayerStepLock.
     * @implements IReqPlayerStepLock
     * @constructor
     * @param {IReqPlayerStepLock=} [properties] Properties to set
     */
    function ReqPlayerStepLock(properties) {
        this.optionList = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ReqPlayerStepLock optionList.
     * @member {Array.<IPlayerOption>} optionList
     * @memberof ReqPlayerStepLock
     * @instance
     */
    ReqPlayerStepLock.prototype.optionList = $util.emptyArray;

    /**
     * Creates a new ReqPlayerStepLock instance using the specified properties.
     * @function create
     * @memberof ReqPlayerStepLock
     * @static
     * @param {IReqPlayerStepLock=} [properties] Properties to set
     * @returns {ReqPlayerStepLock} ReqPlayerStepLock instance
     */
    ReqPlayerStepLock.create = function create(properties) {
        return new ReqPlayerStepLock(properties);
    };

    /**
     * Encodes the specified ReqPlayerStepLock message. Does not implicitly {@link ReqPlayerStepLock.verify|verify} messages.
     * @function encode
     * @memberof ReqPlayerStepLock
     * @static
     * @param {IReqPlayerStepLock} message ReqPlayerStepLock message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqPlayerStepLock.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.optionList != null && message.optionList.length)
            for (var i = 0; i < message.optionList.length; ++i)
                $root.PlayerOption.encode(message.optionList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ReqPlayerStepLock message, length delimited. Does not implicitly {@link ReqPlayerStepLock.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqPlayerStepLock
     * @static
     * @param {IReqPlayerStepLock} message ReqPlayerStepLock message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqPlayerStepLock.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReqPlayerStepLock message from the specified reader or buffer.
     * @function decode
     * @memberof ReqPlayerStepLock
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqPlayerStepLock} ReqPlayerStepLock
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqPlayerStepLock.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqPlayerStepLock();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.optionList && message.optionList.length))
                    message.optionList = [];
                message.optionList.push($root.PlayerOption.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ReqPlayerStepLock message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqPlayerStepLock
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqPlayerStepLock} ReqPlayerStepLock
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqPlayerStepLock.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReqPlayerStepLock message.
     * @function verify
     * @memberof ReqPlayerStepLock
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqPlayerStepLock.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.optionList != null && message.hasOwnProperty("optionList")) {
            if (!Array.isArray(message.optionList))
                return "optionList: array expected";
            for (var i = 0; i < message.optionList.length; ++i) {
                var error = $root.PlayerOption.verify(message.optionList[i]);
                if (error)
                    return "optionList." + error;
            }
        }
        return null;
    };

    /**
     * Creates a ReqPlayerStepLock message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqPlayerStepLock
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqPlayerStepLock} ReqPlayerStepLock
     */
    ReqPlayerStepLock.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqPlayerStepLock)
            return object;
        var message = new $root.ReqPlayerStepLock();
        if (object.optionList) {
            if (!Array.isArray(object.optionList))
                throw TypeError(".ReqPlayerStepLock.optionList: array expected");
            message.optionList = [];
            for (var i = 0; i < object.optionList.length; ++i) {
                if (typeof object.optionList[i] !== "object")
                    throw TypeError(".ReqPlayerStepLock.optionList: object expected");
                message.optionList[i] = $root.PlayerOption.fromObject(object.optionList[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a ReqPlayerStepLock message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqPlayerStepLock
     * @static
     * @param {ReqPlayerStepLock} message ReqPlayerStepLock
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqPlayerStepLock.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.optionList = [];
        if (message.optionList && message.optionList.length) {
            object.optionList = [];
            for (var j = 0; j < message.optionList.length; ++j)
                object.optionList[j] = $root.PlayerOption.toObject(message.optionList[j], options);
        }
        return object;
    };

    /**
     * Converts this ReqPlayerStepLock to JSON.
     * @function toJSON
     * @memberof ReqPlayerStepLock
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqPlayerStepLock.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ReqPlayerStepLock;
})();

$root.InfPlayerStepLock = (function() {

    /**
     * Properties of an InfPlayerStepLock.
     * @exports IInfPlayerStepLock
     * @interface IInfPlayerStepLock
     * @property {number} step InfPlayerStepLock step
     * @property {Array.<IPlayerOption>|null} [optionList] InfPlayerStepLock optionList
     */

    /**
     * Constructs a new InfPlayerStepLock.
     * @exports InfPlayerStepLock
     * @classdesc Represents an InfPlayerStepLock.
     * @implements IInfPlayerStepLock
     * @constructor
     * @param {IInfPlayerStepLock=} [properties] Properties to set
     */
    function InfPlayerStepLock(properties) {
        this.optionList = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * InfPlayerStepLock step.
     * @member {number} step
     * @memberof InfPlayerStepLock
     * @instance
     */
    InfPlayerStepLock.prototype.step = 0;

    /**
     * InfPlayerStepLock optionList.
     * @member {Array.<IPlayerOption>} optionList
     * @memberof InfPlayerStepLock
     * @instance
     */
    InfPlayerStepLock.prototype.optionList = $util.emptyArray;

    /**
     * Creates a new InfPlayerStepLock instance using the specified properties.
     * @function create
     * @memberof InfPlayerStepLock
     * @static
     * @param {IInfPlayerStepLock=} [properties] Properties to set
     * @returns {InfPlayerStepLock} InfPlayerStepLock instance
     */
    InfPlayerStepLock.create = function create(properties) {
        return new InfPlayerStepLock(properties);
    };

    /**
     * Encodes the specified InfPlayerStepLock message. Does not implicitly {@link InfPlayerStepLock.verify|verify} messages.
     * @function encode
     * @memberof InfPlayerStepLock
     * @static
     * @param {IInfPlayerStepLock} message InfPlayerStepLock message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    InfPlayerStepLock.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.step);
        if (message.optionList != null && message.optionList.length)
            for (var i = 0; i < message.optionList.length; ++i)
                $root.PlayerOption.encode(message.optionList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified InfPlayerStepLock message, length delimited. Does not implicitly {@link InfPlayerStepLock.verify|verify} messages.
     * @function encodeDelimited
     * @memberof InfPlayerStepLock
     * @static
     * @param {IInfPlayerStepLock} message InfPlayerStepLock message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    InfPlayerStepLock.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an InfPlayerStepLock message from the specified reader or buffer.
     * @function decode
     * @memberof InfPlayerStepLock
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {InfPlayerStepLock} InfPlayerStepLock
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    InfPlayerStepLock.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.InfPlayerStepLock();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.step = reader.int32();
                break;
            case 2:
                if (!(message.optionList && message.optionList.length))
                    message.optionList = [];
                message.optionList.push($root.PlayerOption.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("step"))
            throw $util.ProtocolError("missing required 'step'", { instance: message });
        return message;
    };

    /**
     * Decodes an InfPlayerStepLock message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof InfPlayerStepLock
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {InfPlayerStepLock} InfPlayerStepLock
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    InfPlayerStepLock.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an InfPlayerStepLock message.
     * @function verify
     * @memberof InfPlayerStepLock
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    InfPlayerStepLock.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.step))
            return "step: integer expected";
        if (message.optionList != null && message.hasOwnProperty("optionList")) {
            if (!Array.isArray(message.optionList))
                return "optionList: array expected";
            for (var i = 0; i < message.optionList.length; ++i) {
                var error = $root.PlayerOption.verify(message.optionList[i]);
                if (error)
                    return "optionList." + error;
            }
        }
        return null;
    };

    /**
     * Creates an InfPlayerStepLock message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof InfPlayerStepLock
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {InfPlayerStepLock} InfPlayerStepLock
     */
    InfPlayerStepLock.fromObject = function fromObject(object) {
        if (object instanceof $root.InfPlayerStepLock)
            return object;
        var message = new $root.InfPlayerStepLock();
        if (object.step != null)
            message.step = object.step | 0;
        if (object.optionList) {
            if (!Array.isArray(object.optionList))
                throw TypeError(".InfPlayerStepLock.optionList: array expected");
            message.optionList = [];
            for (var i = 0; i < object.optionList.length; ++i) {
                if (typeof object.optionList[i] !== "object")
                    throw TypeError(".InfPlayerStepLock.optionList: object expected");
                message.optionList[i] = $root.PlayerOption.fromObject(object.optionList[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from an InfPlayerStepLock message. Also converts values to other types if specified.
     * @function toObject
     * @memberof InfPlayerStepLock
     * @static
     * @param {InfPlayerStepLock} message InfPlayerStepLock
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    InfPlayerStepLock.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.optionList = [];
        if (options.defaults)
            object.step = 0;
        if (message.step != null && message.hasOwnProperty("step"))
            object.step = message.step;
        if (message.optionList && message.optionList.length) {
            object.optionList = [];
            for (var j = 0; j < message.optionList.length; ++j)
                object.optionList[j] = $root.PlayerOption.toObject(message.optionList[j], options);
        }
        return object;
    };

    /**
     * Converts this InfPlayerStepLock to JSON.
     * @function toJSON
     * @memberof InfPlayerStepLock
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    InfPlayerStepLock.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return InfPlayerStepLock;
})();

$root.ReqPlayerGlobalData = (function() {

    /**
     * Properties of a ReqPlayerGlobalData.
     * @exports IReqPlayerGlobalData
     * @interface IReqPlayerGlobalData
     */

    /**
     * Constructs a new ReqPlayerGlobalData.
     * @exports ReqPlayerGlobalData
     * @classdesc Represents a ReqPlayerGlobalData.
     * @implements IReqPlayerGlobalData
     * @constructor
     * @param {IReqPlayerGlobalData=} [properties] Properties to set
     */
    function ReqPlayerGlobalData(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new ReqPlayerGlobalData instance using the specified properties.
     * @function create
     * @memberof ReqPlayerGlobalData
     * @static
     * @param {IReqPlayerGlobalData=} [properties] Properties to set
     * @returns {ReqPlayerGlobalData} ReqPlayerGlobalData instance
     */
    ReqPlayerGlobalData.create = function create(properties) {
        return new ReqPlayerGlobalData(properties);
    };

    /**
     * Encodes the specified ReqPlayerGlobalData message. Does not implicitly {@link ReqPlayerGlobalData.verify|verify} messages.
     * @function encode
     * @memberof ReqPlayerGlobalData
     * @static
     * @param {IReqPlayerGlobalData} message ReqPlayerGlobalData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqPlayerGlobalData.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified ReqPlayerGlobalData message, length delimited. Does not implicitly {@link ReqPlayerGlobalData.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqPlayerGlobalData
     * @static
     * @param {IReqPlayerGlobalData} message ReqPlayerGlobalData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqPlayerGlobalData.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReqPlayerGlobalData message from the specified reader or buffer.
     * @function decode
     * @memberof ReqPlayerGlobalData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqPlayerGlobalData} ReqPlayerGlobalData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqPlayerGlobalData.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqPlayerGlobalData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ReqPlayerGlobalData message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqPlayerGlobalData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqPlayerGlobalData} ReqPlayerGlobalData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqPlayerGlobalData.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReqPlayerGlobalData message.
     * @function verify
     * @memberof ReqPlayerGlobalData
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqPlayerGlobalData.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a ReqPlayerGlobalData message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqPlayerGlobalData
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqPlayerGlobalData} ReqPlayerGlobalData
     */
    ReqPlayerGlobalData.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqPlayerGlobalData)
            return object;
        return new $root.ReqPlayerGlobalData();
    };

    /**
     * Creates a plain object from a ReqPlayerGlobalData message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqPlayerGlobalData
     * @static
     * @param {ReqPlayerGlobalData} message ReqPlayerGlobalData
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqPlayerGlobalData.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this ReqPlayerGlobalData to JSON.
     * @function toJSON
     * @memberof ReqPlayerGlobalData
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqPlayerGlobalData.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ReqPlayerGlobalData;
})();

$root.InfPlayerGlobalData = (function() {

    /**
     * Properties of an InfPlayerGlobalData.
     * @exports IInfPlayerGlobalData
     * @interface IInfPlayerGlobalData
     */

    /**
     * Constructs a new InfPlayerGlobalData.
     * @exports InfPlayerGlobalData
     * @classdesc Represents an InfPlayerGlobalData.
     * @implements IInfPlayerGlobalData
     * @constructor
     * @param {IInfPlayerGlobalData=} [properties] Properties to set
     */
    function InfPlayerGlobalData(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new InfPlayerGlobalData instance using the specified properties.
     * @function create
     * @memberof InfPlayerGlobalData
     * @static
     * @param {IInfPlayerGlobalData=} [properties] Properties to set
     * @returns {InfPlayerGlobalData} InfPlayerGlobalData instance
     */
    InfPlayerGlobalData.create = function create(properties) {
        return new InfPlayerGlobalData(properties);
    };

    /**
     * Encodes the specified InfPlayerGlobalData message. Does not implicitly {@link InfPlayerGlobalData.verify|verify} messages.
     * @function encode
     * @memberof InfPlayerGlobalData
     * @static
     * @param {IInfPlayerGlobalData} message InfPlayerGlobalData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    InfPlayerGlobalData.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified InfPlayerGlobalData message, length delimited. Does not implicitly {@link InfPlayerGlobalData.verify|verify} messages.
     * @function encodeDelimited
     * @memberof InfPlayerGlobalData
     * @static
     * @param {IInfPlayerGlobalData} message InfPlayerGlobalData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    InfPlayerGlobalData.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an InfPlayerGlobalData message from the specified reader or buffer.
     * @function decode
     * @memberof InfPlayerGlobalData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {InfPlayerGlobalData} InfPlayerGlobalData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    InfPlayerGlobalData.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.InfPlayerGlobalData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an InfPlayerGlobalData message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof InfPlayerGlobalData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {InfPlayerGlobalData} InfPlayerGlobalData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    InfPlayerGlobalData.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an InfPlayerGlobalData message.
     * @function verify
     * @memberof InfPlayerGlobalData
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    InfPlayerGlobalData.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates an InfPlayerGlobalData message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof InfPlayerGlobalData
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {InfPlayerGlobalData} InfPlayerGlobalData
     */
    InfPlayerGlobalData.fromObject = function fromObject(object) {
        if (object instanceof $root.InfPlayerGlobalData)
            return object;
        return new $root.InfPlayerGlobalData();
    };

    /**
     * Creates a plain object from an InfPlayerGlobalData message. Also converts values to other types if specified.
     * @function toObject
     * @memberof InfPlayerGlobalData
     * @static
     * @param {InfPlayerGlobalData} message InfPlayerGlobalData
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    InfPlayerGlobalData.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this InfPlayerGlobalData to JSON.
     * @function toJSON
     * @memberof InfPlayerGlobalData
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    InfPlayerGlobalData.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return InfPlayerGlobalData;
})();

$root.ReqPlayerToGatewayMgr = (function() {

    /**
     * Properties of a ReqPlayerToGatewayMgr.
     * @exports IReqPlayerToGatewayMgr
     * @interface IReqPlayerToGatewayMgr
     */

    /**
     * Constructs a new ReqPlayerToGatewayMgr.
     * @exports ReqPlayerToGatewayMgr
     * @classdesc Represents a ReqPlayerToGatewayMgr.
     * @implements IReqPlayerToGatewayMgr
     * @constructor
     * @param {IReqPlayerToGatewayMgr=} [properties] Properties to set
     */
    function ReqPlayerToGatewayMgr(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new ReqPlayerToGatewayMgr instance using the specified properties.
     * @function create
     * @memberof ReqPlayerToGatewayMgr
     * @static
     * @param {IReqPlayerToGatewayMgr=} [properties] Properties to set
     * @returns {ReqPlayerToGatewayMgr} ReqPlayerToGatewayMgr instance
     */
    ReqPlayerToGatewayMgr.create = function create(properties) {
        return new ReqPlayerToGatewayMgr(properties);
    };

    /**
     * Encodes the specified ReqPlayerToGatewayMgr message. Does not implicitly {@link ReqPlayerToGatewayMgr.verify|verify} messages.
     * @function encode
     * @memberof ReqPlayerToGatewayMgr
     * @static
     * @param {IReqPlayerToGatewayMgr} message ReqPlayerToGatewayMgr message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqPlayerToGatewayMgr.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified ReqPlayerToGatewayMgr message, length delimited. Does not implicitly {@link ReqPlayerToGatewayMgr.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqPlayerToGatewayMgr
     * @static
     * @param {IReqPlayerToGatewayMgr} message ReqPlayerToGatewayMgr message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqPlayerToGatewayMgr.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReqPlayerToGatewayMgr message from the specified reader or buffer.
     * @function decode
     * @memberof ReqPlayerToGatewayMgr
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqPlayerToGatewayMgr} ReqPlayerToGatewayMgr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqPlayerToGatewayMgr.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqPlayerToGatewayMgr();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ReqPlayerToGatewayMgr message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqPlayerToGatewayMgr
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqPlayerToGatewayMgr} ReqPlayerToGatewayMgr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqPlayerToGatewayMgr.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReqPlayerToGatewayMgr message.
     * @function verify
     * @memberof ReqPlayerToGatewayMgr
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqPlayerToGatewayMgr.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a ReqPlayerToGatewayMgr message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqPlayerToGatewayMgr
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqPlayerToGatewayMgr} ReqPlayerToGatewayMgr
     */
    ReqPlayerToGatewayMgr.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqPlayerToGatewayMgr)
            return object;
        return new $root.ReqPlayerToGatewayMgr();
    };

    /**
     * Creates a plain object from a ReqPlayerToGatewayMgr message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqPlayerToGatewayMgr
     * @static
     * @param {ReqPlayerToGatewayMgr} message ReqPlayerToGatewayMgr
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqPlayerToGatewayMgr.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this ReqPlayerToGatewayMgr to JSON.
     * @function toJSON
     * @memberof ReqPlayerToGatewayMgr
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqPlayerToGatewayMgr.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ReqPlayerToGatewayMgr;
})();

$root.RspPlayerToGatewayMgr = (function() {

    /**
     * Properties of a RspPlayerToGatewayMgr.
     * @exports IRspPlayerToGatewayMgr
     * @interface IRspPlayerToGatewayMgr
     * @property {number} uin RspPlayerToGatewayMgr uin
     * @property {string} url RspPlayerToGatewayMgr url
     * @property {number} internetPort RspPlayerToGatewayMgr internetPort
     */

    /**
     * Constructs a new RspPlayerToGatewayMgr.
     * @exports RspPlayerToGatewayMgr
     * @classdesc Represents a RspPlayerToGatewayMgr.
     * @implements IRspPlayerToGatewayMgr
     * @constructor
     * @param {IRspPlayerToGatewayMgr=} [properties] Properties to set
     */
    function RspPlayerToGatewayMgr(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RspPlayerToGatewayMgr uin.
     * @member {number} uin
     * @memberof RspPlayerToGatewayMgr
     * @instance
     */
    RspPlayerToGatewayMgr.prototype.uin = 0;

    /**
     * RspPlayerToGatewayMgr url.
     * @member {string} url
     * @memberof RspPlayerToGatewayMgr
     * @instance
     */
    RspPlayerToGatewayMgr.prototype.url = "";

    /**
     * RspPlayerToGatewayMgr internetPort.
     * @member {number} internetPort
     * @memberof RspPlayerToGatewayMgr
     * @instance
     */
    RspPlayerToGatewayMgr.prototype.internetPort = 0;

    /**
     * Creates a new RspPlayerToGatewayMgr instance using the specified properties.
     * @function create
     * @memberof RspPlayerToGatewayMgr
     * @static
     * @param {IRspPlayerToGatewayMgr=} [properties] Properties to set
     * @returns {RspPlayerToGatewayMgr} RspPlayerToGatewayMgr instance
     */
    RspPlayerToGatewayMgr.create = function create(properties) {
        return new RspPlayerToGatewayMgr(properties);
    };

    /**
     * Encodes the specified RspPlayerToGatewayMgr message. Does not implicitly {@link RspPlayerToGatewayMgr.verify|verify} messages.
     * @function encode
     * @memberof RspPlayerToGatewayMgr
     * @static
     * @param {IRspPlayerToGatewayMgr} message RspPlayerToGatewayMgr message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RspPlayerToGatewayMgr.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.uin);
        writer.uint32(/* id 2, wireType 2 =*/18).string(message.url);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.internetPort);
        return writer;
    };

    /**
     * Encodes the specified RspPlayerToGatewayMgr message, length delimited. Does not implicitly {@link RspPlayerToGatewayMgr.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RspPlayerToGatewayMgr
     * @static
     * @param {IRspPlayerToGatewayMgr} message RspPlayerToGatewayMgr message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RspPlayerToGatewayMgr.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RspPlayerToGatewayMgr message from the specified reader or buffer.
     * @function decode
     * @memberof RspPlayerToGatewayMgr
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RspPlayerToGatewayMgr} RspPlayerToGatewayMgr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RspPlayerToGatewayMgr.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RspPlayerToGatewayMgr();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.uin = reader.int32();
                break;
            case 2:
                message.url = reader.string();
                break;
            case 3:
                message.internetPort = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("uin"))
            throw $util.ProtocolError("missing required 'uin'", { instance: message });
        if (!message.hasOwnProperty("url"))
            throw $util.ProtocolError("missing required 'url'", { instance: message });
        if (!message.hasOwnProperty("internetPort"))
            throw $util.ProtocolError("missing required 'internetPort'", { instance: message });
        return message;
    };

    /**
     * Decodes a RspPlayerToGatewayMgr message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RspPlayerToGatewayMgr
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RspPlayerToGatewayMgr} RspPlayerToGatewayMgr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RspPlayerToGatewayMgr.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RspPlayerToGatewayMgr message.
     * @function verify
     * @memberof RspPlayerToGatewayMgr
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RspPlayerToGatewayMgr.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.uin))
            return "uin: integer expected";
        if (!$util.isString(message.url))
            return "url: string expected";
        if (!$util.isInteger(message.internetPort))
            return "internetPort: integer expected";
        return null;
    };

    /**
     * Creates a RspPlayerToGatewayMgr message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RspPlayerToGatewayMgr
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RspPlayerToGatewayMgr} RspPlayerToGatewayMgr
     */
    RspPlayerToGatewayMgr.fromObject = function fromObject(object) {
        if (object instanceof $root.RspPlayerToGatewayMgr)
            return object;
        var message = new $root.RspPlayerToGatewayMgr();
        if (object.uin != null)
            message.uin = object.uin | 0;
        if (object.url != null)
            message.url = String(object.url);
        if (object.internetPort != null)
            message.internetPort = object.internetPort | 0;
        return message;
    };

    /**
     * Creates a plain object from a RspPlayerToGatewayMgr message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RspPlayerToGatewayMgr
     * @static
     * @param {RspPlayerToGatewayMgr} message RspPlayerToGatewayMgr
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RspPlayerToGatewayMgr.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.uin = 0;
            object.url = "";
            object.internetPort = 0;
        }
        if (message.uin != null && message.hasOwnProperty("uin"))
            object.uin = message.uin;
        if (message.url != null && message.hasOwnProperty("url"))
            object.url = message.url;
        if (message.internetPort != null && message.hasOwnProperty("internetPort"))
            object.internetPort = message.internetPort;
        return object;
    };

    /**
     * Converts this RspPlayerToGatewayMgr to JSON.
     * @function toJSON
     * @memberof RspPlayerToGatewayMgr
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RspPlayerToGatewayMgr.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RspPlayerToGatewayMgr;
})();

$root.ReqPing = (function() {

    /**
     * Properties of a ReqPing.
     * @exports IReqPing
     * @interface IReqPing
     * @property {number|Long} timestamp ReqPing timestamp
     */

    /**
     * Constructs a new ReqPing.
     * @exports ReqPing
     * @classdesc Represents a ReqPing.
     * @implements IReqPing
     * @constructor
     * @param {IReqPing=} [properties] Properties to set
     */
    function ReqPing(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ReqPing timestamp.
     * @member {number|Long} timestamp
     * @memberof ReqPing
     * @instance
     */
    ReqPing.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new ReqPing instance using the specified properties.
     * @function create
     * @memberof ReqPing
     * @static
     * @param {IReqPing=} [properties] Properties to set
     * @returns {ReqPing} ReqPing instance
     */
    ReqPing.create = function create(properties) {
        return new ReqPing(properties);
    };

    /**
     * Encodes the specified ReqPing message. Does not implicitly {@link ReqPing.verify|verify} messages.
     * @function encode
     * @memberof ReqPing
     * @static
     * @param {IReqPing} message ReqPing message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqPing.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.timestamp);
        return writer;
    };

    /**
     * Encodes the specified ReqPing message, length delimited. Does not implicitly {@link ReqPing.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqPing
     * @static
     * @param {IReqPing} message ReqPing message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqPing.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReqPing message from the specified reader or buffer.
     * @function decode
     * @memberof ReqPing
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqPing} ReqPing
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqPing.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqPing();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.timestamp = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("timestamp"))
            throw $util.ProtocolError("missing required 'timestamp'", { instance: message });
        return message;
    };

    /**
     * Decodes a ReqPing message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqPing
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqPing} ReqPing
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqPing.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReqPing message.
     * @function verify
     * @memberof ReqPing
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqPing.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
            return "timestamp: integer|Long expected";
        return null;
    };

    /**
     * Creates a ReqPing message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqPing
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqPing} ReqPing
     */
    ReqPing.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqPing)
            return object;
        var message = new $root.ReqPing();
        if (object.timestamp != null)
            if ($util.Long)
                (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
            else if (typeof object.timestamp === "string")
                message.timestamp = parseInt(object.timestamp, 10);
            else if (typeof object.timestamp === "number")
                message.timestamp = object.timestamp;
            else if (typeof object.timestamp === "object")
                message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a ReqPing message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqPing
     * @static
     * @param {ReqPing} message ReqPing
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqPing.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.timestamp = options.longs === String ? "0" : 0;
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (typeof message.timestamp === "number")
                object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
            else
                object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
        return object;
    };

    /**
     * Converts this ReqPing to JSON.
     * @function toJSON
     * @memberof ReqPing
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqPing.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ReqPing;
})();

$root.RspPing = (function() {

    /**
     * Properties of a RspPing.
     * @exports IRspPing
     * @interface IRspPing
     * @property {number|Long} timestamp RspPing timestamp
     */

    /**
     * Constructs a new RspPing.
     * @exports RspPing
     * @classdesc Represents a RspPing.
     * @implements IRspPing
     * @constructor
     * @param {IRspPing=} [properties] Properties to set
     */
    function RspPing(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RspPing timestamp.
     * @member {number|Long} timestamp
     * @memberof RspPing
     * @instance
     */
    RspPing.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new RspPing instance using the specified properties.
     * @function create
     * @memberof RspPing
     * @static
     * @param {IRspPing=} [properties] Properties to set
     * @returns {RspPing} RspPing instance
     */
    RspPing.create = function create(properties) {
        return new RspPing(properties);
    };

    /**
     * Encodes the specified RspPing message. Does not implicitly {@link RspPing.verify|verify} messages.
     * @function encode
     * @memberof RspPing
     * @static
     * @param {IRspPing} message RspPing message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RspPing.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.timestamp);
        return writer;
    };

    /**
     * Encodes the specified RspPing message, length delimited. Does not implicitly {@link RspPing.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RspPing
     * @static
     * @param {IRspPing} message RspPing message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RspPing.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RspPing message from the specified reader or buffer.
     * @function decode
     * @memberof RspPing
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RspPing} RspPing
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RspPing.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RspPing();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.timestamp = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("timestamp"))
            throw $util.ProtocolError("missing required 'timestamp'", { instance: message });
        return message;
    };

    /**
     * Decodes a RspPing message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RspPing
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RspPing} RspPing
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RspPing.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RspPing message.
     * @function verify
     * @memberof RspPing
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RspPing.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
            return "timestamp: integer|Long expected";
        return null;
    };

    /**
     * Creates a RspPing message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RspPing
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RspPing} RspPing
     */
    RspPing.fromObject = function fromObject(object) {
        if (object instanceof $root.RspPing)
            return object;
        var message = new $root.RspPing();
        if (object.timestamp != null)
            if ($util.Long)
                (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
            else if (typeof object.timestamp === "string")
                message.timestamp = parseInt(object.timestamp, 10);
            else if (typeof object.timestamp === "number")
                message.timestamp = object.timestamp;
            else if (typeof object.timestamp === "object")
                message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a RspPing message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RspPing
     * @static
     * @param {RspPing} message RspPing
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RspPing.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.timestamp = options.longs === String ? "0" : 0;
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (typeof message.timestamp === "number")
                object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
            else
                object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
        return object;
    };

    /**
     * Converts this RspPing to JSON.
     * @function toJSON
     * @memberof RspPing
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RspPing.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RspPing;
})();

$root.ReqPlayerLeaveTable = (function() {

    /**
     * Properties of a ReqPlayerLeaveTable.
     * @exports IReqPlayerLeaveTable
     * @interface IReqPlayerLeaveTable
     */

    /**
     * Constructs a new ReqPlayerLeaveTable.
     * @exports ReqPlayerLeaveTable
     * @classdesc Represents a ReqPlayerLeaveTable.
     * @implements IReqPlayerLeaveTable
     * @constructor
     * @param {IReqPlayerLeaveTable=} [properties] Properties to set
     */
    function ReqPlayerLeaveTable(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new ReqPlayerLeaveTable instance using the specified properties.
     * @function create
     * @memberof ReqPlayerLeaveTable
     * @static
     * @param {IReqPlayerLeaveTable=} [properties] Properties to set
     * @returns {ReqPlayerLeaveTable} ReqPlayerLeaveTable instance
     */
    ReqPlayerLeaveTable.create = function create(properties) {
        return new ReqPlayerLeaveTable(properties);
    };

    /**
     * Encodes the specified ReqPlayerLeaveTable message. Does not implicitly {@link ReqPlayerLeaveTable.verify|verify} messages.
     * @function encode
     * @memberof ReqPlayerLeaveTable
     * @static
     * @param {IReqPlayerLeaveTable} message ReqPlayerLeaveTable message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqPlayerLeaveTable.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified ReqPlayerLeaveTable message, length delimited. Does not implicitly {@link ReqPlayerLeaveTable.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqPlayerLeaveTable
     * @static
     * @param {IReqPlayerLeaveTable} message ReqPlayerLeaveTable message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqPlayerLeaveTable.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReqPlayerLeaveTable message from the specified reader or buffer.
     * @function decode
     * @memberof ReqPlayerLeaveTable
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqPlayerLeaveTable} ReqPlayerLeaveTable
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqPlayerLeaveTable.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqPlayerLeaveTable();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ReqPlayerLeaveTable message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqPlayerLeaveTable
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqPlayerLeaveTable} ReqPlayerLeaveTable
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqPlayerLeaveTable.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReqPlayerLeaveTable message.
     * @function verify
     * @memberof ReqPlayerLeaveTable
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqPlayerLeaveTable.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a ReqPlayerLeaveTable message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqPlayerLeaveTable
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqPlayerLeaveTable} ReqPlayerLeaveTable
     */
    ReqPlayerLeaveTable.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqPlayerLeaveTable)
            return object;
        return new $root.ReqPlayerLeaveTable();
    };

    /**
     * Creates a plain object from a ReqPlayerLeaveTable message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqPlayerLeaveTable
     * @static
     * @param {ReqPlayerLeaveTable} message ReqPlayerLeaveTable
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqPlayerLeaveTable.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this ReqPlayerLeaveTable to JSON.
     * @function toJSON
     * @memberof ReqPlayerLeaveTable
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqPlayerLeaveTable.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ReqPlayerLeaveTable;
})();

/**
 * SSProtoID enum.
 * @exports SSProtoID
 * @enum {string}
 * @property {number} REQ_REGISTER_TO_GATEWAY=410001 REQ_REGISTER_TO_GATEWAY value
 * @property {number} RSP_REGISTER_TO_GATEWAY=410002 RSP_REGISTER_TO_GATEWAY value
 * @property {number} INF_GATEWAY_TO_LOGIC_HEARTBEAT=410003 INF_GATEWAY_TO_LOGIC_HEARTBEAT value
 * @property {number} INF_CLIENT_DISCONNECT=410004 INF_CLIENT_DISCONNECT value
 * @property {number} INF_PLAYER_DISCONNECT=410005 INF_PLAYER_DISCONNECT value
 * @property {number} REQ_REGISTER_TO_DBPROC=420000 REQ_REGISTER_TO_DBPROC value
 * @property {number} REQ_GET_PLAYER_INFO=420001 REQ_GET_PLAYER_INFO value
 * @property {number} RSP_GET_PLAYER_INFO=420002 RSP_GET_PLAYER_INFO value
 * @property {number} REQ_EXEC_UPDATE=420003 REQ_EXEC_UPDATE value
 * @property {number} INF_LOGIC_TO_DBPROC_HEARTBEAT=420004 INF_LOGIC_TO_DBPROC_HEARTBEAT value
 * @property {number} REQ_REGISTER_TO_GMSERVER=430001 REQ_REGISTER_TO_GMSERVER value
 * @property {number} RSP_REGISTER_TO_GMSERVER=430002 RSP_REGISTER_TO_GMSERVER value
 * @property {number} INF_LOGIC_TO_GMSVR_HEARTBEAT=430003 INF_LOGIC_TO_GMSVR_HEARTBEAT value
 * @property {number} REQ_GTE_LOGIC_S_IP_PORT=440001 REQ_GTE_LOGIC_S_IP_PORT value
 * @property {number} RSP_GTE_LOGIC_S_IP_PORT=440002 RSP_GTE_LOGIC_S_IP_PORT value
 * @property {number} REQ_GATEWAY_TO_GATEWAYMGR=450001 REQ_GATEWAY_TO_GATEWAYMGR value
 * @property {number} RSP_GATEWAY_TO_GATEWAYMGR=450002 RSP_GATEWAY_TO_GATEWAYMGR value
 * @property {number} REQ_LOGIC_TO_GATEWAYMGR=460001 REQ_LOGIC_TO_GATEWAYMGR value
 * @property {number} RSP_LOGIC_TO_GATEWAYMGR=460002 RSP_LOGIC_TO_GATEWAYMGR value
 * @property {number} INF_LOGIC_TO_GATEWAYMGR_HEARTBEAT=460003 INF_LOGIC_TO_GATEWAYMGR_HEARTBEAT value
 * @property {number} REQ_DB_REGISTER_TO_DBMGR=470001 REQ_DB_REGISTER_TO_DBMGR value
 * @property {number} REQ_DB_HEART_BEAT_TO_DBMGR=470002 REQ_DB_HEART_BEAT_TO_DBMGR value
 * @property {number} DBPROC_MYSQL_PING=470003 DBPROC_MYSQL_PING value
 * @property {number} REQ_ASSIGN_DB_INFO=480001 REQ_ASSIGN_DB_INFO value
 * @property {number} RSP_ASSIGN_DB_INFO=480002 RSP_ASSIGN_DB_INFO value
 * @property {number} INF_LOGIC_DBMGR_HEARTBEAT=480003 INF_LOGIC_DBMGR_HEARTBEAT value
 * @property {number} REQ_ASSIGN_GATEWAY_INFO=490001 REQ_ASSIGN_GATEWAY_INFO value
 * @property {number} RSP_ASSIGN_GATEWAY_INFO=490002 RSP_ASSIGN_GATEWAY_INFO value
 */
$root.SSProtoID = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[410001] = "REQ_REGISTER_TO_GATEWAY"] = 410001;
    values[valuesById[410002] = "RSP_REGISTER_TO_GATEWAY"] = 410002;
    values[valuesById[410003] = "INF_GATEWAY_TO_LOGIC_HEARTBEAT"] = 410003;
    values[valuesById[410004] = "INF_CLIENT_DISCONNECT"] = 410004;
    values[valuesById[410005] = "INF_PLAYER_DISCONNECT"] = 410005;
    values[valuesById[420000] = "REQ_REGISTER_TO_DBPROC"] = 420000;
    values[valuesById[420001] = "REQ_GET_PLAYER_INFO"] = 420001;
    values[valuesById[420002] = "RSP_GET_PLAYER_INFO"] = 420002;
    values[valuesById[420003] = "REQ_EXEC_UPDATE"] = 420003;
    values[valuesById[420004] = "INF_LOGIC_TO_DBPROC_HEARTBEAT"] = 420004;
    values[valuesById[430001] = "REQ_REGISTER_TO_GMSERVER"] = 430001;
    values[valuesById[430002] = "RSP_REGISTER_TO_GMSERVER"] = 430002;
    values[valuesById[430003] = "INF_LOGIC_TO_GMSVR_HEARTBEAT"] = 430003;
    values[valuesById[440001] = "REQ_GTE_LOGIC_S_IP_PORT"] = 440001;
    values[valuesById[440002] = "RSP_GTE_LOGIC_S_IP_PORT"] = 440002;
    values[valuesById[450001] = "REQ_GATEWAY_TO_GATEWAYMGR"] = 450001;
    values[valuesById[450002] = "RSP_GATEWAY_TO_GATEWAYMGR"] = 450002;
    values[valuesById[460001] = "REQ_LOGIC_TO_GATEWAYMGR"] = 460001;
    values[valuesById[460002] = "RSP_LOGIC_TO_GATEWAYMGR"] = 460002;
    values[valuesById[460003] = "INF_LOGIC_TO_GATEWAYMGR_HEARTBEAT"] = 460003;
    values[valuesById[470001] = "REQ_DB_REGISTER_TO_DBMGR"] = 470001;
    values[valuesById[470002] = "REQ_DB_HEART_BEAT_TO_DBMGR"] = 470002;
    values[valuesById[470003] = "DBPROC_MYSQL_PING"] = 470003;
    values[valuesById[480001] = "REQ_ASSIGN_DB_INFO"] = 480001;
    values[valuesById[480002] = "RSP_ASSIGN_DB_INFO"] = 480002;
    values[valuesById[480003] = "INF_LOGIC_DBMGR_HEARTBEAT"] = 480003;
    values[valuesById[490001] = "REQ_ASSIGN_GATEWAY_INFO"] = 490001;
    values[valuesById[490002] = "RSP_ASSIGN_GATEWAY_INFO"] = 490002;
    return values;
})();

/**
 * CSProtoID enum.
 * @exports CSProtoID
 * @enum {string}
 * @property {number} REQ_PLAYER_AUTH=500001 REQ_PLAYER_AUTH value
 * @property {number} RSP_PLAYER_AUTH=500002 RSP_PLAYER_AUTH value
 * @property {number} REQ_PLAYER_LOGIN=600001 REQ_PLAYER_LOGIN value
 * @property {number} RSP_PLAYER_LOGIN=600002 RSP_PLAYER_LOGIN value
 * @property {number} RSP_PLAYER_NOT_LOGIN=600003 RSP_PLAYER_NOT_LOGIN value
 * @property {number} REQ_PLAYER_CREATE_TEAM=600004 REQ_PLAYER_CREATE_TEAM value
 * @property {number} REQ_PLAYER_JOIN_TEAM=600005 REQ_PLAYER_JOIN_TEAM value
 * @property {number} REQ_PLAYER_LEAVE_TEAM=600006 REQ_PLAYER_LEAVE_TEAM value
 * @property {number} REQ_PLAYER_CHANGE_SEAT=600007 REQ_PLAYER_CHANGE_SEAT value
 * @property {number} REQ_REMOVE_PLAYER=600008 REQ_REMOVE_PLAYER value
 * @property {number} REQ_PLAYER_READY=600009 REQ_PLAYER_READY value
 * @property {number} RSP_PLAYER_TEAM_ACTION=600010 RSP_PLAYER_TEAM_ACTION value
 * @property {number} INF_PLAYER_TEAM_ACTION=600011 INF_PLAYER_TEAM_ACTION value
 * @property {number} REQ_PLAYER_START_GAME=600012 REQ_PLAYER_START_GAME value
 * @property {number} INF_PLAYER_START_GAME=600013 INF_PLAYER_START_GAME value
 * @property {number} REQ_PLAYER_GAME_DATA=600014 REQ_PLAYER_GAME_DATA value
 * @property {number} INF_PLAYER_GAME_DATA=600015 INF_PLAYER_GAME_DATA value
 * @property {number} REQ_PLAYER_GLOBAL_DATA=600016 REQ_PLAYER_GLOBAL_DATA value
 * @property {number} INF_PLAYER_GLOBAL_DATA=600017 INF_PLAYER_GLOBAL_DATA value
 * @property {number} REQ_PLAYER_MATCH=600018 REQ_PLAYER_MATCH value
 * @property {number} INF_PLAYER_MATCH=600019 INF_PLAYER_MATCH value
 * @property {number} REQ_PING=600020 REQ_PING value
 * @property {number} RSP_PING=600021 RSP_PING value
 * @property {number} REQ_PLAYER_END_GAME=600022 REQ_PLAYER_END_GAME value
 * @property {number} INF_PLAYER_END_GAME=600023 INF_PLAYER_END_GAME value
 * @property {number} INF_PLAYER_MATCH_SUCCESS=600024 INF_PLAYER_MATCH_SUCCESS value
 * @property {number} REQ_LEAVE_TABLE=600025 REQ_LEAVE_TABLE value
 * @property {number} REQ_PLAYER_STEP_LOCK=700001 REQ_PLAYER_STEP_LOCK value
 * @property {number} INF_PLAYER_STEP_LOCK=700002 INF_PLAYER_STEP_LOCK value
 * @property {number} REQ_PLAYER_TO_GATEWAYMGR=800001 REQ_PLAYER_TO_GATEWAYMGR value
 * @property {number} RSP_PLAYER_TO_GATEWAYMGR=800002 RSP_PLAYER_TO_GATEWAYMGR value
 * @property {number} REQ_HEARTBEAT=900001 REQ_HEARTBEAT value
 */
$root.CSProtoID = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[500001] = "REQ_PLAYER_AUTH"] = 500001;
    values[valuesById[500002] = "RSP_PLAYER_AUTH"] = 500002;
    values[valuesById[600001] = "REQ_PLAYER_LOGIN"] = 600001;
    values[valuesById[600002] = "RSP_PLAYER_LOGIN"] = 600002;
    values[valuesById[600003] = "RSP_PLAYER_NOT_LOGIN"] = 600003;
    values[valuesById[600004] = "REQ_PLAYER_CREATE_TEAM"] = 600004;
    values[valuesById[600005] = "REQ_PLAYER_JOIN_TEAM"] = 600005;
    values[valuesById[600006] = "REQ_PLAYER_LEAVE_TEAM"] = 600006;
    values[valuesById[600007] = "REQ_PLAYER_CHANGE_SEAT"] = 600007;
    values[valuesById[600008] = "REQ_REMOVE_PLAYER"] = 600008;
    values[valuesById[600009] = "REQ_PLAYER_READY"] = 600009;
    values[valuesById[600010] = "RSP_PLAYER_TEAM_ACTION"] = 600010;
    values[valuesById[600011] = "INF_PLAYER_TEAM_ACTION"] = 600011;
    values[valuesById[600012] = "REQ_PLAYER_START_GAME"] = 600012;
    values[valuesById[600013] = "INF_PLAYER_START_GAME"] = 600013;
    values[valuesById[600014] = "REQ_PLAYER_GAME_DATA"] = 600014;
    values[valuesById[600015] = "INF_PLAYER_GAME_DATA"] = 600015;
    values[valuesById[600016] = "REQ_PLAYER_GLOBAL_DATA"] = 600016;
    values[valuesById[600017] = "INF_PLAYER_GLOBAL_DATA"] = 600017;
    values[valuesById[600018] = "REQ_PLAYER_MATCH"] = 600018;
    values[valuesById[600019] = "INF_PLAYER_MATCH"] = 600019;
    values[valuesById[600020] = "REQ_PING"] = 600020;
    values[valuesById[600021] = "RSP_PING"] = 600021;
    values[valuesById[600022] = "REQ_PLAYER_END_GAME"] = 600022;
    values[valuesById[600023] = "INF_PLAYER_END_GAME"] = 600023;
    values[valuesById[600024] = "INF_PLAYER_MATCH_SUCCESS"] = 600024;
    values[valuesById[600025] = "REQ_LEAVE_TABLE"] = 600025;
    values[valuesById[700001] = "REQ_PLAYER_STEP_LOCK"] = 700001;
    values[valuesById[700002] = "INF_PLAYER_STEP_LOCK"] = 700002;
    values[valuesById[800001] = "REQ_PLAYER_TO_GATEWAYMGR"] = 800001;
    values[valuesById[800002] = "RSP_PLAYER_TO_GATEWAYMGR"] = 800002;
    values[valuesById[900001] = "REQ_HEARTBEAT"] = 900001;
    return values;
})();

/**
 * ResultID enum.
 * @exports ResultID
 * @enum {string}
 * @property {number} SUCCESS=0 SUCCESS value
 * @property {number} INVALID_OPERATION=1 INVALID_OPERATION value
 * @property {number} SERVER_ERROR=2 SERVER_ERROR value
 * @property {number} NOT_IN_TEAM=201 NOT_IN_TEAM value
 * @property {number} ALREADY_IN_TEAM=202 ALREADY_IN_TEAM value
 * @property {number} TEAM_NOT_EXIST=203 TEAM_NOT_EXIST value
 * @property {number} TEAM_ALREADY_FULL=204 TEAM_ALREADY_FULL value
 * @property {number} NOT_IN_TABLE=301 NOT_IN_TABLE value
 * @property {number} ALREADY_IN_TABLE=302 ALREADY_IN_TABLE value
 */
$root.ResultID = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "SUCCESS"] = 0;
    values[valuesById[1] = "INVALID_OPERATION"] = 1;
    values[valuesById[2] = "SERVER_ERROR"] = 2;
    values[valuesById[201] = "NOT_IN_TEAM"] = 201;
    values[valuesById[202] = "ALREADY_IN_TEAM"] = 202;
    values[valuesById[203] = "TEAM_NOT_EXIST"] = 203;
    values[valuesById[204] = "TEAM_ALREADY_FULL"] = 204;
    values[valuesById[301] = "NOT_IN_TABLE"] = 301;
    values[valuesById[302] = "ALREADY_IN_TABLE"] = 302;
    return values;
})();

/**
 * OperationID enum.
 * @exports OperationID
 * @enum {string}
 * @property {number} TEAM_PLAYER_ADD=0 TEAM_PLAYER_ADD value
 * @property {number} TEAM_PLAYER_DEL=1 TEAM_PLAYER_DEL value
 * @property {number} TEAM_PLAYER_REMOVE=2 TEAM_PLAYER_REMOVE value
 * @property {number} TEAM_PLAYER_CANCEL_READY=3 TEAM_PLAYER_CANCEL_READY value
 * @property {number} TEAM_PLAYER_CHANGE_SEAT=4 TEAM_PLAYER_CHANGE_SEAT value
 * @property {number} ENTRY_MATCH=6 ENTRY_MATCH value
 * @property {number} CANCEL_MATCH=7 CANCEL_MATCH value
 * @property {number} ENTRY_READY=8 ENTRY_READY value
 * @property {number} CANCEL_READY=9 CANCEL_READY value
 */
$root.OperationID = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "TEAM_PLAYER_ADD"] = 0;
    values[valuesById[1] = "TEAM_PLAYER_DEL"] = 1;
    values[valuesById[2] = "TEAM_PLAYER_REMOVE"] = 2;
    values[valuesById[3] = "TEAM_PLAYER_CANCEL_READY"] = 3;
    values[valuesById[4] = "TEAM_PLAYER_CHANGE_SEAT"] = 4;
    values[valuesById[6] = "ENTRY_MATCH"] = 6;
    values[valuesById[7] = "CANCEL_MATCH"] = 7;
    values[valuesById[8] = "ENTRY_READY"] = 8;
    values[valuesById[9] = "CANCEL_READY"] = 9;
    return values;
})();

$root.ReqRegistToGateway = (function() {

    /**
     * Properties of a ReqRegistToGateway.
     * @exports IReqRegistToGateway
     * @interface IReqRegistToGateway
     * @property {number} gameID ReqRegistToGateway gameID
     * @property {number} groupID ReqRegistToGateway groupID
     */

    /**
     * Constructs a new ReqRegistToGateway.
     * @exports ReqRegistToGateway
     * @classdesc Represents a ReqRegistToGateway.
     * @implements IReqRegistToGateway
     * @constructor
     * @param {IReqRegistToGateway=} [properties] Properties to set
     */
    function ReqRegistToGateway(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ReqRegistToGateway gameID.
     * @member {number} gameID
     * @memberof ReqRegistToGateway
     * @instance
     */
    ReqRegistToGateway.prototype.gameID = 0;

    /**
     * ReqRegistToGateway groupID.
     * @member {number} groupID
     * @memberof ReqRegistToGateway
     * @instance
     */
    ReqRegistToGateway.prototype.groupID = 0;

    /**
     * Creates a new ReqRegistToGateway instance using the specified properties.
     * @function create
     * @memberof ReqRegistToGateway
     * @static
     * @param {IReqRegistToGateway=} [properties] Properties to set
     * @returns {ReqRegistToGateway} ReqRegistToGateway instance
     */
    ReqRegistToGateway.create = function create(properties) {
        return new ReqRegistToGateway(properties);
    };

    /**
     * Encodes the specified ReqRegistToGateway message. Does not implicitly {@link ReqRegistToGateway.verify|verify} messages.
     * @function encode
     * @memberof ReqRegistToGateway
     * @static
     * @param {IReqRegistToGateway} message ReqRegistToGateway message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqRegistToGateway.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.gameID);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.groupID);
        return writer;
    };

    /**
     * Encodes the specified ReqRegistToGateway message, length delimited. Does not implicitly {@link ReqRegistToGateway.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqRegistToGateway
     * @static
     * @param {IReqRegistToGateway} message ReqRegistToGateway message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqRegistToGateway.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReqRegistToGateway message from the specified reader or buffer.
     * @function decode
     * @memberof ReqRegistToGateway
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqRegistToGateway} ReqRegistToGateway
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqRegistToGateway.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqRegistToGateway();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.gameID = reader.int32();
                break;
            case 2:
                message.groupID = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("gameID"))
            throw $util.ProtocolError("missing required 'gameID'", { instance: message });
        if (!message.hasOwnProperty("groupID"))
            throw $util.ProtocolError("missing required 'groupID'", { instance: message });
        return message;
    };

    /**
     * Decodes a ReqRegistToGateway message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqRegistToGateway
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqRegistToGateway} ReqRegistToGateway
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqRegistToGateway.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReqRegistToGateway message.
     * @function verify
     * @memberof ReqRegistToGateway
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqRegistToGateway.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.gameID))
            return "gameID: integer expected";
        if (!$util.isInteger(message.groupID))
            return "groupID: integer expected";
        return null;
    };

    /**
     * Creates a ReqRegistToGateway message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqRegistToGateway
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqRegistToGateway} ReqRegistToGateway
     */
    ReqRegistToGateway.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqRegistToGateway)
            return object;
        var message = new $root.ReqRegistToGateway();
        if (object.gameID != null)
            message.gameID = object.gameID | 0;
        if (object.groupID != null)
            message.groupID = object.groupID | 0;
        return message;
    };

    /**
     * Creates a plain object from a ReqRegistToGateway message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqRegistToGateway
     * @static
     * @param {ReqRegistToGateway} message ReqRegistToGateway
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqRegistToGateway.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.gameID = 0;
            object.groupID = 0;
        }
        if (message.gameID != null && message.hasOwnProperty("gameID"))
            object.gameID = message.gameID;
        if (message.groupID != null && message.hasOwnProperty("groupID"))
            object.groupID = message.groupID;
        return object;
    };

    /**
     * Converts this ReqRegistToGateway to JSON.
     * @function toJSON
     * @memberof ReqRegistToGateway
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqRegistToGateway.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ReqRegistToGateway;
})();

$root.RspRegistToGateway = (function() {

    /**
     * Properties of a RspRegistToGateway.
     * @exports IRspRegistToGateway
     * @interface IRspRegistToGateway
     * @property {number} resultID RspRegistToGateway resultID
     */

    /**
     * Constructs a new RspRegistToGateway.
     * @exports RspRegistToGateway
     * @classdesc Represents a RspRegistToGateway.
     * @implements IRspRegistToGateway
     * @constructor
     * @param {IRspRegistToGateway=} [properties] Properties to set
     */
    function RspRegistToGateway(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RspRegistToGateway resultID.
     * @member {number} resultID
     * @memberof RspRegistToGateway
     * @instance
     */
    RspRegistToGateway.prototype.resultID = 0;

    /**
     * Creates a new RspRegistToGateway instance using the specified properties.
     * @function create
     * @memberof RspRegistToGateway
     * @static
     * @param {IRspRegistToGateway=} [properties] Properties to set
     * @returns {RspRegistToGateway} RspRegistToGateway instance
     */
    RspRegistToGateway.create = function create(properties) {
        return new RspRegistToGateway(properties);
    };

    /**
     * Encodes the specified RspRegistToGateway message. Does not implicitly {@link RspRegistToGateway.verify|verify} messages.
     * @function encode
     * @memberof RspRegistToGateway
     * @static
     * @param {IRspRegistToGateway} message RspRegistToGateway message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RspRegistToGateway.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.resultID);
        return writer;
    };

    /**
     * Encodes the specified RspRegistToGateway message, length delimited. Does not implicitly {@link RspRegistToGateway.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RspRegistToGateway
     * @static
     * @param {IRspRegistToGateway} message RspRegistToGateway message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RspRegistToGateway.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RspRegistToGateway message from the specified reader or buffer.
     * @function decode
     * @memberof RspRegistToGateway
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RspRegistToGateway} RspRegistToGateway
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RspRegistToGateway.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RspRegistToGateway();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.resultID = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("resultID"))
            throw $util.ProtocolError("missing required 'resultID'", { instance: message });
        return message;
    };

    /**
     * Decodes a RspRegistToGateway message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RspRegistToGateway
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RspRegistToGateway} RspRegistToGateway
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RspRegistToGateway.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RspRegistToGateway message.
     * @function verify
     * @memberof RspRegistToGateway
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RspRegistToGateway.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.resultID))
            return "resultID: integer expected";
        return null;
    };

    /**
     * Creates a RspRegistToGateway message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RspRegistToGateway
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RspRegistToGateway} RspRegistToGateway
     */
    RspRegistToGateway.fromObject = function fromObject(object) {
        if (object instanceof $root.RspRegistToGateway)
            return object;
        var message = new $root.RspRegistToGateway();
        if (object.resultID != null)
            message.resultID = object.resultID | 0;
        return message;
    };

    /**
     * Creates a plain object from a RspRegistToGateway message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RspRegistToGateway
     * @static
     * @param {RspRegistToGateway} message RspRegistToGateway
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RspRegistToGateway.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.resultID = 0;
        if (message.resultID != null && message.hasOwnProperty("resultID"))
            object.resultID = message.resultID;
        return object;
    };

    /**
     * Converts this RspRegistToGateway to JSON.
     * @function toJSON
     * @memberof RspRegistToGateway
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RspRegistToGateway.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RspRegistToGateway;
})();

$root.ReqGatewayToGatewayMgr = (function() {

    /**
     * Properties of a ReqGatewayToGatewayMgr.
     * @exports IReqGatewayToGatewayMgr
     * @interface IReqGatewayToGatewayMgr
     * @property {number} uin ReqGatewayToGatewayMgr uin
     * @property {number} clientConnectNum ReqGatewayToGatewayMgr clientConnectNum
     * @property {number} logicConnectNum ReqGatewayToGatewayMgr logicConnectNum
     * @property {number} packagesTransferPerMin ReqGatewayToGatewayMgr packagesTransferPerMin
     * @property {number} internetIp ReqGatewayToGatewayMgr internetIp
     * @property {number} internetPort ReqGatewayToGatewayMgr internetPort
     * @property {number} intranetIp ReqGatewayToGatewayMgr intranetIp
     * @property {number} intranetPort ReqGatewayToGatewayMgr intranetPort
     */

    /**
     * Constructs a new ReqGatewayToGatewayMgr.
     * @exports ReqGatewayToGatewayMgr
     * @classdesc Represents a ReqGatewayToGatewayMgr.
     * @implements IReqGatewayToGatewayMgr
     * @constructor
     * @param {IReqGatewayToGatewayMgr=} [properties] Properties to set
     */
    function ReqGatewayToGatewayMgr(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ReqGatewayToGatewayMgr uin.
     * @member {number} uin
     * @memberof ReqGatewayToGatewayMgr
     * @instance
     */
    ReqGatewayToGatewayMgr.prototype.uin = 0;

    /**
     * ReqGatewayToGatewayMgr clientConnectNum.
     * @member {number} clientConnectNum
     * @memberof ReqGatewayToGatewayMgr
     * @instance
     */
    ReqGatewayToGatewayMgr.prototype.clientConnectNum = 0;

    /**
     * ReqGatewayToGatewayMgr logicConnectNum.
     * @member {number} logicConnectNum
     * @memberof ReqGatewayToGatewayMgr
     * @instance
     */
    ReqGatewayToGatewayMgr.prototype.logicConnectNum = 0;

    /**
     * ReqGatewayToGatewayMgr packagesTransferPerMin.
     * @member {number} packagesTransferPerMin
     * @memberof ReqGatewayToGatewayMgr
     * @instance
     */
    ReqGatewayToGatewayMgr.prototype.packagesTransferPerMin = 0;

    /**
     * ReqGatewayToGatewayMgr internetIp.
     * @member {number} internetIp
     * @memberof ReqGatewayToGatewayMgr
     * @instance
     */
    ReqGatewayToGatewayMgr.prototype.internetIp = 0;

    /**
     * ReqGatewayToGatewayMgr internetPort.
     * @member {number} internetPort
     * @memberof ReqGatewayToGatewayMgr
     * @instance
     */
    ReqGatewayToGatewayMgr.prototype.internetPort = 0;

    /**
     * ReqGatewayToGatewayMgr intranetIp.
     * @member {number} intranetIp
     * @memberof ReqGatewayToGatewayMgr
     * @instance
     */
    ReqGatewayToGatewayMgr.prototype.intranetIp = 0;

    /**
     * ReqGatewayToGatewayMgr intranetPort.
     * @member {number} intranetPort
     * @memberof ReqGatewayToGatewayMgr
     * @instance
     */
    ReqGatewayToGatewayMgr.prototype.intranetPort = 0;

    /**
     * Creates a new ReqGatewayToGatewayMgr instance using the specified properties.
     * @function create
     * @memberof ReqGatewayToGatewayMgr
     * @static
     * @param {IReqGatewayToGatewayMgr=} [properties] Properties to set
     * @returns {ReqGatewayToGatewayMgr} ReqGatewayToGatewayMgr instance
     */
    ReqGatewayToGatewayMgr.create = function create(properties) {
        return new ReqGatewayToGatewayMgr(properties);
    };

    /**
     * Encodes the specified ReqGatewayToGatewayMgr message. Does not implicitly {@link ReqGatewayToGatewayMgr.verify|verify} messages.
     * @function encode
     * @memberof ReqGatewayToGatewayMgr
     * @static
     * @param {IReqGatewayToGatewayMgr} message ReqGatewayToGatewayMgr message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqGatewayToGatewayMgr.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.uin);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.clientConnectNum);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.logicConnectNum);
        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.packagesTransferPerMin);
        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.internetIp);
        writer.uint32(/* id 6, wireType 0 =*/48).int32(message.internetPort);
        writer.uint32(/* id 7, wireType 0 =*/56).int32(message.intranetIp);
        writer.uint32(/* id 8, wireType 0 =*/64).int32(message.intranetPort);
        return writer;
    };

    /**
     * Encodes the specified ReqGatewayToGatewayMgr message, length delimited. Does not implicitly {@link ReqGatewayToGatewayMgr.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqGatewayToGatewayMgr
     * @static
     * @param {IReqGatewayToGatewayMgr} message ReqGatewayToGatewayMgr message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqGatewayToGatewayMgr.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReqGatewayToGatewayMgr message from the specified reader or buffer.
     * @function decode
     * @memberof ReqGatewayToGatewayMgr
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqGatewayToGatewayMgr} ReqGatewayToGatewayMgr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqGatewayToGatewayMgr.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqGatewayToGatewayMgr();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.uin = reader.int32();
                break;
            case 2:
                message.clientConnectNum = reader.int32();
                break;
            case 3:
                message.logicConnectNum = reader.int32();
                break;
            case 4:
                message.packagesTransferPerMin = reader.int32();
                break;
            case 5:
                message.internetIp = reader.int32();
                break;
            case 6:
                message.internetPort = reader.int32();
                break;
            case 7:
                message.intranetIp = reader.int32();
                break;
            case 8:
                message.intranetPort = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("uin"))
            throw $util.ProtocolError("missing required 'uin'", { instance: message });
        if (!message.hasOwnProperty("clientConnectNum"))
            throw $util.ProtocolError("missing required 'clientConnectNum'", { instance: message });
        if (!message.hasOwnProperty("logicConnectNum"))
            throw $util.ProtocolError("missing required 'logicConnectNum'", { instance: message });
        if (!message.hasOwnProperty("packagesTransferPerMin"))
            throw $util.ProtocolError("missing required 'packagesTransferPerMin'", { instance: message });
        if (!message.hasOwnProperty("internetIp"))
            throw $util.ProtocolError("missing required 'internetIp'", { instance: message });
        if (!message.hasOwnProperty("internetPort"))
            throw $util.ProtocolError("missing required 'internetPort'", { instance: message });
        if (!message.hasOwnProperty("intranetIp"))
            throw $util.ProtocolError("missing required 'intranetIp'", { instance: message });
        if (!message.hasOwnProperty("intranetPort"))
            throw $util.ProtocolError("missing required 'intranetPort'", { instance: message });
        return message;
    };

    /**
     * Decodes a ReqGatewayToGatewayMgr message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqGatewayToGatewayMgr
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqGatewayToGatewayMgr} ReqGatewayToGatewayMgr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqGatewayToGatewayMgr.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReqGatewayToGatewayMgr message.
     * @function verify
     * @memberof ReqGatewayToGatewayMgr
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqGatewayToGatewayMgr.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.uin))
            return "uin: integer expected";
        if (!$util.isInteger(message.clientConnectNum))
            return "clientConnectNum: integer expected";
        if (!$util.isInteger(message.logicConnectNum))
            return "logicConnectNum: integer expected";
        if (!$util.isInteger(message.packagesTransferPerMin))
            return "packagesTransferPerMin: integer expected";
        if (!$util.isInteger(message.internetIp))
            return "internetIp: integer expected";
        if (!$util.isInteger(message.internetPort))
            return "internetPort: integer expected";
        if (!$util.isInteger(message.intranetIp))
            return "intranetIp: integer expected";
        if (!$util.isInteger(message.intranetPort))
            return "intranetPort: integer expected";
        return null;
    };

    /**
     * Creates a ReqGatewayToGatewayMgr message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqGatewayToGatewayMgr
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqGatewayToGatewayMgr} ReqGatewayToGatewayMgr
     */
    ReqGatewayToGatewayMgr.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqGatewayToGatewayMgr)
            return object;
        var message = new $root.ReqGatewayToGatewayMgr();
        if (object.uin != null)
            message.uin = object.uin | 0;
        if (object.clientConnectNum != null)
            message.clientConnectNum = object.clientConnectNum | 0;
        if (object.logicConnectNum != null)
            message.logicConnectNum = object.logicConnectNum | 0;
        if (object.packagesTransferPerMin != null)
            message.packagesTransferPerMin = object.packagesTransferPerMin | 0;
        if (object.internetIp != null)
            message.internetIp = object.internetIp | 0;
        if (object.internetPort != null)
            message.internetPort = object.internetPort | 0;
        if (object.intranetIp != null)
            message.intranetIp = object.intranetIp | 0;
        if (object.intranetPort != null)
            message.intranetPort = object.intranetPort | 0;
        return message;
    };

    /**
     * Creates a plain object from a ReqGatewayToGatewayMgr message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqGatewayToGatewayMgr
     * @static
     * @param {ReqGatewayToGatewayMgr} message ReqGatewayToGatewayMgr
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqGatewayToGatewayMgr.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.uin = 0;
            object.clientConnectNum = 0;
            object.logicConnectNum = 0;
            object.packagesTransferPerMin = 0;
            object.internetIp = 0;
            object.internetPort = 0;
            object.intranetIp = 0;
            object.intranetPort = 0;
        }
        if (message.uin != null && message.hasOwnProperty("uin"))
            object.uin = message.uin;
        if (message.clientConnectNum != null && message.hasOwnProperty("clientConnectNum"))
            object.clientConnectNum = message.clientConnectNum;
        if (message.logicConnectNum != null && message.hasOwnProperty("logicConnectNum"))
            object.logicConnectNum = message.logicConnectNum;
        if (message.packagesTransferPerMin != null && message.hasOwnProperty("packagesTransferPerMin"))
            object.packagesTransferPerMin = message.packagesTransferPerMin;
        if (message.internetIp != null && message.hasOwnProperty("internetIp"))
            object.internetIp = message.internetIp;
        if (message.internetPort != null && message.hasOwnProperty("internetPort"))
            object.internetPort = message.internetPort;
        if (message.intranetIp != null && message.hasOwnProperty("intranetIp"))
            object.intranetIp = message.intranetIp;
        if (message.intranetPort != null && message.hasOwnProperty("intranetPort"))
            object.intranetPort = message.intranetPort;
        return object;
    };

    /**
     * Converts this ReqGatewayToGatewayMgr to JSON.
     * @function toJSON
     * @memberof ReqGatewayToGatewayMgr
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqGatewayToGatewayMgr.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ReqGatewayToGatewayMgr;
})();

$root.RspGatewayToGatewayMgr = (function() {

    /**
     * Properties of a RspGatewayToGatewayMgr.
     * @exports IRspGatewayToGatewayMgr
     * @interface IRspGatewayToGatewayMgr
     * @property {number} resultID RspGatewayToGatewayMgr resultID
     */

    /**
     * Constructs a new RspGatewayToGatewayMgr.
     * @exports RspGatewayToGatewayMgr
     * @classdesc Represents a RspGatewayToGatewayMgr.
     * @implements IRspGatewayToGatewayMgr
     * @constructor
     * @param {IRspGatewayToGatewayMgr=} [properties] Properties to set
     */
    function RspGatewayToGatewayMgr(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RspGatewayToGatewayMgr resultID.
     * @member {number} resultID
     * @memberof RspGatewayToGatewayMgr
     * @instance
     */
    RspGatewayToGatewayMgr.prototype.resultID = 0;

    /**
     * Creates a new RspGatewayToGatewayMgr instance using the specified properties.
     * @function create
     * @memberof RspGatewayToGatewayMgr
     * @static
     * @param {IRspGatewayToGatewayMgr=} [properties] Properties to set
     * @returns {RspGatewayToGatewayMgr} RspGatewayToGatewayMgr instance
     */
    RspGatewayToGatewayMgr.create = function create(properties) {
        return new RspGatewayToGatewayMgr(properties);
    };

    /**
     * Encodes the specified RspGatewayToGatewayMgr message. Does not implicitly {@link RspGatewayToGatewayMgr.verify|verify} messages.
     * @function encode
     * @memberof RspGatewayToGatewayMgr
     * @static
     * @param {IRspGatewayToGatewayMgr} message RspGatewayToGatewayMgr message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RspGatewayToGatewayMgr.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.resultID);
        return writer;
    };

    /**
     * Encodes the specified RspGatewayToGatewayMgr message, length delimited. Does not implicitly {@link RspGatewayToGatewayMgr.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RspGatewayToGatewayMgr
     * @static
     * @param {IRspGatewayToGatewayMgr} message RspGatewayToGatewayMgr message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RspGatewayToGatewayMgr.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RspGatewayToGatewayMgr message from the specified reader or buffer.
     * @function decode
     * @memberof RspGatewayToGatewayMgr
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RspGatewayToGatewayMgr} RspGatewayToGatewayMgr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RspGatewayToGatewayMgr.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RspGatewayToGatewayMgr();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.resultID = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("resultID"))
            throw $util.ProtocolError("missing required 'resultID'", { instance: message });
        return message;
    };

    /**
     * Decodes a RspGatewayToGatewayMgr message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RspGatewayToGatewayMgr
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RspGatewayToGatewayMgr} RspGatewayToGatewayMgr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RspGatewayToGatewayMgr.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RspGatewayToGatewayMgr message.
     * @function verify
     * @memberof RspGatewayToGatewayMgr
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RspGatewayToGatewayMgr.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.resultID))
            return "resultID: integer expected";
        return null;
    };

    /**
     * Creates a RspGatewayToGatewayMgr message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RspGatewayToGatewayMgr
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RspGatewayToGatewayMgr} RspGatewayToGatewayMgr
     */
    RspGatewayToGatewayMgr.fromObject = function fromObject(object) {
        if (object instanceof $root.RspGatewayToGatewayMgr)
            return object;
        var message = new $root.RspGatewayToGatewayMgr();
        if (object.resultID != null)
            message.resultID = object.resultID | 0;
        return message;
    };

    /**
     * Creates a plain object from a RspGatewayToGatewayMgr message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RspGatewayToGatewayMgr
     * @static
     * @param {RspGatewayToGatewayMgr} message RspGatewayToGatewayMgr
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RspGatewayToGatewayMgr.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.resultID = 0;
        if (message.resultID != null && message.hasOwnProperty("resultID"))
            object.resultID = message.resultID;
        return object;
    };

    /**
     * Converts this RspGatewayToGatewayMgr to JSON.
     * @function toJSON
     * @memberof RspGatewayToGatewayMgr
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RspGatewayToGatewayMgr.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RspGatewayToGatewayMgr;
})();

$root.ReqLogicToGatewayMgr = (function() {

    /**
     * Properties of a ReqLogicToGatewayMgr.
     * @exports IReqLogicToGatewayMgr
     * @interface IReqLogicToGatewayMgr
     */

    /**
     * Constructs a new ReqLogicToGatewayMgr.
     * @exports ReqLogicToGatewayMgr
     * @classdesc Represents a ReqLogicToGatewayMgr.
     * @implements IReqLogicToGatewayMgr
     * @constructor
     * @param {IReqLogicToGatewayMgr=} [properties] Properties to set
     */
    function ReqLogicToGatewayMgr(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new ReqLogicToGatewayMgr instance using the specified properties.
     * @function create
     * @memberof ReqLogicToGatewayMgr
     * @static
     * @param {IReqLogicToGatewayMgr=} [properties] Properties to set
     * @returns {ReqLogicToGatewayMgr} ReqLogicToGatewayMgr instance
     */
    ReqLogicToGatewayMgr.create = function create(properties) {
        return new ReqLogicToGatewayMgr(properties);
    };

    /**
     * Encodes the specified ReqLogicToGatewayMgr message. Does not implicitly {@link ReqLogicToGatewayMgr.verify|verify} messages.
     * @function encode
     * @memberof ReqLogicToGatewayMgr
     * @static
     * @param {IReqLogicToGatewayMgr} message ReqLogicToGatewayMgr message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqLogicToGatewayMgr.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified ReqLogicToGatewayMgr message, length delimited. Does not implicitly {@link ReqLogicToGatewayMgr.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqLogicToGatewayMgr
     * @static
     * @param {IReqLogicToGatewayMgr} message ReqLogicToGatewayMgr message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqLogicToGatewayMgr.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReqLogicToGatewayMgr message from the specified reader or buffer.
     * @function decode
     * @memberof ReqLogicToGatewayMgr
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqLogicToGatewayMgr} ReqLogicToGatewayMgr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqLogicToGatewayMgr.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqLogicToGatewayMgr();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ReqLogicToGatewayMgr message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqLogicToGatewayMgr
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqLogicToGatewayMgr} ReqLogicToGatewayMgr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqLogicToGatewayMgr.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReqLogicToGatewayMgr message.
     * @function verify
     * @memberof ReqLogicToGatewayMgr
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqLogicToGatewayMgr.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a ReqLogicToGatewayMgr message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqLogicToGatewayMgr
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqLogicToGatewayMgr} ReqLogicToGatewayMgr
     */
    ReqLogicToGatewayMgr.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqLogicToGatewayMgr)
            return object;
        return new $root.ReqLogicToGatewayMgr();
    };

    /**
     * Creates a plain object from a ReqLogicToGatewayMgr message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqLogicToGatewayMgr
     * @static
     * @param {ReqLogicToGatewayMgr} message ReqLogicToGatewayMgr
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqLogicToGatewayMgr.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this ReqLogicToGatewayMgr to JSON.
     * @function toJSON
     * @memberof ReqLogicToGatewayMgr
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqLogicToGatewayMgr.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ReqLogicToGatewayMgr;
})();

$root.RspLogicToGatewayMgr = (function() {

    /**
     * Properties of a RspLogicToGatewayMgr.
     * @exports IRspLogicToGatewayMgr
     * @interface IRspLogicToGatewayMgr
     * @property {number} intranetIp RspLogicToGatewayMgr intranetIp
     * @property {number} intranetPort RspLogicToGatewayMgr intranetPort
     */

    /**
     * Constructs a new RspLogicToGatewayMgr.
     * @exports RspLogicToGatewayMgr
     * @classdesc Represents a RspLogicToGatewayMgr.
     * @implements IRspLogicToGatewayMgr
     * @constructor
     * @param {IRspLogicToGatewayMgr=} [properties] Properties to set
     */
    function RspLogicToGatewayMgr(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RspLogicToGatewayMgr intranetIp.
     * @member {number} intranetIp
     * @memberof RspLogicToGatewayMgr
     * @instance
     */
    RspLogicToGatewayMgr.prototype.intranetIp = 0;

    /**
     * RspLogicToGatewayMgr intranetPort.
     * @member {number} intranetPort
     * @memberof RspLogicToGatewayMgr
     * @instance
     */
    RspLogicToGatewayMgr.prototype.intranetPort = 0;

    /**
     * Creates a new RspLogicToGatewayMgr instance using the specified properties.
     * @function create
     * @memberof RspLogicToGatewayMgr
     * @static
     * @param {IRspLogicToGatewayMgr=} [properties] Properties to set
     * @returns {RspLogicToGatewayMgr} RspLogicToGatewayMgr instance
     */
    RspLogicToGatewayMgr.create = function create(properties) {
        return new RspLogicToGatewayMgr(properties);
    };

    /**
     * Encodes the specified RspLogicToGatewayMgr message. Does not implicitly {@link RspLogicToGatewayMgr.verify|verify} messages.
     * @function encode
     * @memberof RspLogicToGatewayMgr
     * @static
     * @param {IRspLogicToGatewayMgr} message RspLogicToGatewayMgr message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RspLogicToGatewayMgr.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.intranetIp);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.intranetPort);
        return writer;
    };

    /**
     * Encodes the specified RspLogicToGatewayMgr message, length delimited. Does not implicitly {@link RspLogicToGatewayMgr.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RspLogicToGatewayMgr
     * @static
     * @param {IRspLogicToGatewayMgr} message RspLogicToGatewayMgr message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RspLogicToGatewayMgr.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RspLogicToGatewayMgr message from the specified reader or buffer.
     * @function decode
     * @memberof RspLogicToGatewayMgr
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RspLogicToGatewayMgr} RspLogicToGatewayMgr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RspLogicToGatewayMgr.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RspLogicToGatewayMgr();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.intranetIp = reader.int32();
                break;
            case 2:
                message.intranetPort = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("intranetIp"))
            throw $util.ProtocolError("missing required 'intranetIp'", { instance: message });
        if (!message.hasOwnProperty("intranetPort"))
            throw $util.ProtocolError("missing required 'intranetPort'", { instance: message });
        return message;
    };

    /**
     * Decodes a RspLogicToGatewayMgr message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RspLogicToGatewayMgr
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RspLogicToGatewayMgr} RspLogicToGatewayMgr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RspLogicToGatewayMgr.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RspLogicToGatewayMgr message.
     * @function verify
     * @memberof RspLogicToGatewayMgr
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RspLogicToGatewayMgr.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.intranetIp))
            return "intranetIp: integer expected";
        if (!$util.isInteger(message.intranetPort))
            return "intranetPort: integer expected";
        return null;
    };

    /**
     * Creates a RspLogicToGatewayMgr message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RspLogicToGatewayMgr
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RspLogicToGatewayMgr} RspLogicToGatewayMgr
     */
    RspLogicToGatewayMgr.fromObject = function fromObject(object) {
        if (object instanceof $root.RspLogicToGatewayMgr)
            return object;
        var message = new $root.RspLogicToGatewayMgr();
        if (object.intranetIp != null)
            message.intranetIp = object.intranetIp | 0;
        if (object.intranetPort != null)
            message.intranetPort = object.intranetPort | 0;
        return message;
    };

    /**
     * Creates a plain object from a RspLogicToGatewayMgr message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RspLogicToGatewayMgr
     * @static
     * @param {RspLogicToGatewayMgr} message RspLogicToGatewayMgr
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RspLogicToGatewayMgr.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.intranetIp = 0;
            object.intranetPort = 0;
        }
        if (message.intranetIp != null && message.hasOwnProperty("intranetIp"))
            object.intranetIp = message.intranetIp;
        if (message.intranetPort != null && message.hasOwnProperty("intranetPort"))
            object.intranetPort = message.intranetPort;
        return object;
    };

    /**
     * Converts this RspLogicToGatewayMgr to JSON.
     * @function toJSON
     * @memberof RspLogicToGatewayMgr
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RspLogicToGatewayMgr.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RspLogicToGatewayMgr;
})();

$root.ReqRegisterToDBProc = (function() {

    /**
     * Properties of a ReqRegisterToDBProc.
     * @exports IReqRegisterToDBProc
     * @interface IReqRegisterToDBProc
     * @property {number} gameId ReqRegisterToDBProc gameId
     * @property {number} groupId ReqRegisterToDBProc groupId
     * @property {string} mysqlIp ReqRegisterToDBProc mysqlIp
     * @property {string} mysqlPort ReqRegisterToDBProc mysqlPort
     * @property {string} mysqlDbname ReqRegisterToDBProc mysqlDbname
     * @property {string} mysqlUsername ReqRegisterToDBProc mysqlUsername
     * @property {string} mysqlPassword ReqRegisterToDBProc mysqlPassword
     */

    /**
     * Constructs a new ReqRegisterToDBProc.
     * @exports ReqRegisterToDBProc
     * @classdesc Represents a ReqRegisterToDBProc.
     * @implements IReqRegisterToDBProc
     * @constructor
     * @param {IReqRegisterToDBProc=} [properties] Properties to set
     */
    function ReqRegisterToDBProc(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ReqRegisterToDBProc gameId.
     * @member {number} gameId
     * @memberof ReqRegisterToDBProc
     * @instance
     */
    ReqRegisterToDBProc.prototype.gameId = 0;

    /**
     * ReqRegisterToDBProc groupId.
     * @member {number} groupId
     * @memberof ReqRegisterToDBProc
     * @instance
     */
    ReqRegisterToDBProc.prototype.groupId = 0;

    /**
     * ReqRegisterToDBProc mysqlIp.
     * @member {string} mysqlIp
     * @memberof ReqRegisterToDBProc
     * @instance
     */
    ReqRegisterToDBProc.prototype.mysqlIp = "";

    /**
     * ReqRegisterToDBProc mysqlPort.
     * @member {string} mysqlPort
     * @memberof ReqRegisterToDBProc
     * @instance
     */
    ReqRegisterToDBProc.prototype.mysqlPort = "";

    /**
     * ReqRegisterToDBProc mysqlDbname.
     * @member {string} mysqlDbname
     * @memberof ReqRegisterToDBProc
     * @instance
     */
    ReqRegisterToDBProc.prototype.mysqlDbname = "";

    /**
     * ReqRegisterToDBProc mysqlUsername.
     * @member {string} mysqlUsername
     * @memberof ReqRegisterToDBProc
     * @instance
     */
    ReqRegisterToDBProc.prototype.mysqlUsername = "";

    /**
     * ReqRegisterToDBProc mysqlPassword.
     * @member {string} mysqlPassword
     * @memberof ReqRegisterToDBProc
     * @instance
     */
    ReqRegisterToDBProc.prototype.mysqlPassword = "";

    /**
     * Creates a new ReqRegisterToDBProc instance using the specified properties.
     * @function create
     * @memberof ReqRegisterToDBProc
     * @static
     * @param {IReqRegisterToDBProc=} [properties] Properties to set
     * @returns {ReqRegisterToDBProc} ReqRegisterToDBProc instance
     */
    ReqRegisterToDBProc.create = function create(properties) {
        return new ReqRegisterToDBProc(properties);
    };

    /**
     * Encodes the specified ReqRegisterToDBProc message. Does not implicitly {@link ReqRegisterToDBProc.verify|verify} messages.
     * @function encode
     * @memberof ReqRegisterToDBProc
     * @static
     * @param {IReqRegisterToDBProc} message ReqRegisterToDBProc message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqRegisterToDBProc.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.gameId);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.groupId);
        writer.uint32(/* id 3, wireType 2 =*/26).string(message.mysqlIp);
        writer.uint32(/* id 4, wireType 2 =*/34).string(message.mysqlPort);
        writer.uint32(/* id 5, wireType 2 =*/42).string(message.mysqlDbname);
        writer.uint32(/* id 6, wireType 2 =*/50).string(message.mysqlUsername);
        writer.uint32(/* id 7, wireType 2 =*/58).string(message.mysqlPassword);
        return writer;
    };

    /**
     * Encodes the specified ReqRegisterToDBProc message, length delimited. Does not implicitly {@link ReqRegisterToDBProc.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqRegisterToDBProc
     * @static
     * @param {IReqRegisterToDBProc} message ReqRegisterToDBProc message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqRegisterToDBProc.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReqRegisterToDBProc message from the specified reader or buffer.
     * @function decode
     * @memberof ReqRegisterToDBProc
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqRegisterToDBProc} ReqRegisterToDBProc
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqRegisterToDBProc.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqRegisterToDBProc();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.gameId = reader.int32();
                break;
            case 2:
                message.groupId = reader.int32();
                break;
            case 3:
                message.mysqlIp = reader.string();
                break;
            case 4:
                message.mysqlPort = reader.string();
                break;
            case 5:
                message.mysqlDbname = reader.string();
                break;
            case 6:
                message.mysqlUsername = reader.string();
                break;
            case 7:
                message.mysqlPassword = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("gameId"))
            throw $util.ProtocolError("missing required 'gameId'", { instance: message });
        if (!message.hasOwnProperty("groupId"))
            throw $util.ProtocolError("missing required 'groupId'", { instance: message });
        if (!message.hasOwnProperty("mysqlIp"))
            throw $util.ProtocolError("missing required 'mysqlIp'", { instance: message });
        if (!message.hasOwnProperty("mysqlPort"))
            throw $util.ProtocolError("missing required 'mysqlPort'", { instance: message });
        if (!message.hasOwnProperty("mysqlDbname"))
            throw $util.ProtocolError("missing required 'mysqlDbname'", { instance: message });
        if (!message.hasOwnProperty("mysqlUsername"))
            throw $util.ProtocolError("missing required 'mysqlUsername'", { instance: message });
        if (!message.hasOwnProperty("mysqlPassword"))
            throw $util.ProtocolError("missing required 'mysqlPassword'", { instance: message });
        return message;
    };

    /**
     * Decodes a ReqRegisterToDBProc message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqRegisterToDBProc
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqRegisterToDBProc} ReqRegisterToDBProc
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqRegisterToDBProc.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReqRegisterToDBProc message.
     * @function verify
     * @memberof ReqRegisterToDBProc
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqRegisterToDBProc.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.gameId))
            return "gameId: integer expected";
        if (!$util.isInteger(message.groupId))
            return "groupId: integer expected";
        if (!$util.isString(message.mysqlIp))
            return "mysqlIp: string expected";
        if (!$util.isString(message.mysqlPort))
            return "mysqlPort: string expected";
        if (!$util.isString(message.mysqlDbname))
            return "mysqlDbname: string expected";
        if (!$util.isString(message.mysqlUsername))
            return "mysqlUsername: string expected";
        if (!$util.isString(message.mysqlPassword))
            return "mysqlPassword: string expected";
        return null;
    };

    /**
     * Creates a ReqRegisterToDBProc message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqRegisterToDBProc
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqRegisterToDBProc} ReqRegisterToDBProc
     */
    ReqRegisterToDBProc.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqRegisterToDBProc)
            return object;
        var message = new $root.ReqRegisterToDBProc();
        if (object.gameId != null)
            message.gameId = object.gameId | 0;
        if (object.groupId != null)
            message.groupId = object.groupId | 0;
        if (object.mysqlIp != null)
            message.mysqlIp = String(object.mysqlIp);
        if (object.mysqlPort != null)
            message.mysqlPort = String(object.mysqlPort);
        if (object.mysqlDbname != null)
            message.mysqlDbname = String(object.mysqlDbname);
        if (object.mysqlUsername != null)
            message.mysqlUsername = String(object.mysqlUsername);
        if (object.mysqlPassword != null)
            message.mysqlPassword = String(object.mysqlPassword);
        return message;
    };

    /**
     * Creates a plain object from a ReqRegisterToDBProc message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqRegisterToDBProc
     * @static
     * @param {ReqRegisterToDBProc} message ReqRegisterToDBProc
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqRegisterToDBProc.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.gameId = 0;
            object.groupId = 0;
            object.mysqlIp = "";
            object.mysqlPort = "";
            object.mysqlDbname = "";
            object.mysqlUsername = "";
            object.mysqlPassword = "";
        }
        if (message.gameId != null && message.hasOwnProperty("gameId"))
            object.gameId = message.gameId;
        if (message.groupId != null && message.hasOwnProperty("groupId"))
            object.groupId = message.groupId;
        if (message.mysqlIp != null && message.hasOwnProperty("mysqlIp"))
            object.mysqlIp = message.mysqlIp;
        if (message.mysqlPort != null && message.hasOwnProperty("mysqlPort"))
            object.mysqlPort = message.mysqlPort;
        if (message.mysqlDbname != null && message.hasOwnProperty("mysqlDbname"))
            object.mysqlDbname = message.mysqlDbname;
        if (message.mysqlUsername != null && message.hasOwnProperty("mysqlUsername"))
            object.mysqlUsername = message.mysqlUsername;
        if (message.mysqlPassword != null && message.hasOwnProperty("mysqlPassword"))
            object.mysqlPassword = message.mysqlPassword;
        return object;
    };

    /**
     * Converts this ReqRegisterToDBProc to JSON.
     * @function toJSON
     * @memberof ReqRegisterToDBProc
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqRegisterToDBProc.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ReqRegisterToDBProc;
})();

$root.PlayerKeyValue = (function() {

    /**
     * Properties of a PlayerKeyValue.
     * @exports IPlayerKeyValue
     * @interface IPlayerKeyValue
     * @property {string} key PlayerKeyValue key
     * @property {string} value PlayerKeyValue value
     */

    /**
     * Constructs a new PlayerKeyValue.
     * @exports PlayerKeyValue
     * @classdesc Represents a PlayerKeyValue.
     * @implements IPlayerKeyValue
     * @constructor
     * @param {IPlayerKeyValue=} [properties] Properties to set
     */
    function PlayerKeyValue(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PlayerKeyValue key.
     * @member {string} key
     * @memberof PlayerKeyValue
     * @instance
     */
    PlayerKeyValue.prototype.key = "";

    /**
     * PlayerKeyValue value.
     * @member {string} value
     * @memberof PlayerKeyValue
     * @instance
     */
    PlayerKeyValue.prototype.value = "";

    /**
     * Creates a new PlayerKeyValue instance using the specified properties.
     * @function create
     * @memberof PlayerKeyValue
     * @static
     * @param {IPlayerKeyValue=} [properties] Properties to set
     * @returns {PlayerKeyValue} PlayerKeyValue instance
     */
    PlayerKeyValue.create = function create(properties) {
        return new PlayerKeyValue(properties);
    };

    /**
     * Encodes the specified PlayerKeyValue message. Does not implicitly {@link PlayerKeyValue.verify|verify} messages.
     * @function encode
     * @memberof PlayerKeyValue
     * @static
     * @param {IPlayerKeyValue} message PlayerKeyValue message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlayerKeyValue.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
        writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
        return writer;
    };

    /**
     * Encodes the specified PlayerKeyValue message, length delimited. Does not implicitly {@link PlayerKeyValue.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PlayerKeyValue
     * @static
     * @param {IPlayerKeyValue} message PlayerKeyValue message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlayerKeyValue.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PlayerKeyValue message from the specified reader or buffer.
     * @function decode
     * @memberof PlayerKeyValue
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PlayerKeyValue} PlayerKeyValue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlayerKeyValue.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlayerKeyValue();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.key = reader.string();
                break;
            case 2:
                message.value = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("key"))
            throw $util.ProtocolError("missing required 'key'", { instance: message });
        if (!message.hasOwnProperty("value"))
            throw $util.ProtocolError("missing required 'value'", { instance: message });
        return message;
    };

    /**
     * Decodes a PlayerKeyValue message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PlayerKeyValue
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PlayerKeyValue} PlayerKeyValue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlayerKeyValue.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PlayerKeyValue message.
     * @function verify
     * @memberof PlayerKeyValue
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PlayerKeyValue.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isString(message.key))
            return "key: string expected";
        if (!$util.isString(message.value))
            return "value: string expected";
        return null;
    };

    /**
     * Creates a PlayerKeyValue message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PlayerKeyValue
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PlayerKeyValue} PlayerKeyValue
     */
    PlayerKeyValue.fromObject = function fromObject(object) {
        if (object instanceof $root.PlayerKeyValue)
            return object;
        var message = new $root.PlayerKeyValue();
        if (object.key != null)
            message.key = String(object.key);
        if (object.value != null)
            message.value = String(object.value);
        return message;
    };

    /**
     * Creates a plain object from a PlayerKeyValue message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PlayerKeyValue
     * @static
     * @param {PlayerKeyValue} message PlayerKeyValue
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PlayerKeyValue.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.key = "";
            object.value = "";
        }
        if (message.key != null && message.hasOwnProperty("key"))
            object.key = message.key;
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = message.value;
        return object;
    };

    /**
     * Converts this PlayerKeyValue to JSON.
     * @function toJSON
     * @memberof PlayerKeyValue
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PlayerKeyValue.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PlayerKeyValue;
})();

$root.InfRouterHeatBeat = (function() {

    /**
     * Properties of an InfRouterHeatBeat.
     * @exports IInfRouterHeatBeat
     * @interface IInfRouterHeatBeat
     * @property {number} nowTimeSec InfRouterHeatBeat nowTimeSec
     */

    /**
     * Constructs a new InfRouterHeatBeat.
     * @exports InfRouterHeatBeat
     * @classdesc Represents an InfRouterHeatBeat.
     * @implements IInfRouterHeatBeat
     * @constructor
     * @param {IInfRouterHeatBeat=} [properties] Properties to set
     */
    function InfRouterHeatBeat(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * InfRouterHeatBeat nowTimeSec.
     * @member {number} nowTimeSec
     * @memberof InfRouterHeatBeat
     * @instance
     */
    InfRouterHeatBeat.prototype.nowTimeSec = 0;

    /**
     * Creates a new InfRouterHeatBeat instance using the specified properties.
     * @function create
     * @memberof InfRouterHeatBeat
     * @static
     * @param {IInfRouterHeatBeat=} [properties] Properties to set
     * @returns {InfRouterHeatBeat} InfRouterHeatBeat instance
     */
    InfRouterHeatBeat.create = function create(properties) {
        return new InfRouterHeatBeat(properties);
    };

    /**
     * Encodes the specified InfRouterHeatBeat message. Does not implicitly {@link InfRouterHeatBeat.verify|verify} messages.
     * @function encode
     * @memberof InfRouterHeatBeat
     * @static
     * @param {IInfRouterHeatBeat} message InfRouterHeatBeat message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    InfRouterHeatBeat.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nowTimeSec);
        return writer;
    };

    /**
     * Encodes the specified InfRouterHeatBeat message, length delimited. Does not implicitly {@link InfRouterHeatBeat.verify|verify} messages.
     * @function encodeDelimited
     * @memberof InfRouterHeatBeat
     * @static
     * @param {IInfRouterHeatBeat} message InfRouterHeatBeat message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    InfRouterHeatBeat.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an InfRouterHeatBeat message from the specified reader or buffer.
     * @function decode
     * @memberof InfRouterHeatBeat
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {InfRouterHeatBeat} InfRouterHeatBeat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    InfRouterHeatBeat.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.InfRouterHeatBeat();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.nowTimeSec = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("nowTimeSec"))
            throw $util.ProtocolError("missing required 'nowTimeSec'", { instance: message });
        return message;
    };

    /**
     * Decodes an InfRouterHeatBeat message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof InfRouterHeatBeat
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {InfRouterHeatBeat} InfRouterHeatBeat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    InfRouterHeatBeat.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an InfRouterHeatBeat message.
     * @function verify
     * @memberof InfRouterHeatBeat
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    InfRouterHeatBeat.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.nowTimeSec))
            return "nowTimeSec: integer expected";
        return null;
    };

    /**
     * Creates an InfRouterHeatBeat message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof InfRouterHeatBeat
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {InfRouterHeatBeat} InfRouterHeatBeat
     */
    InfRouterHeatBeat.fromObject = function fromObject(object) {
        if (object instanceof $root.InfRouterHeatBeat)
            return object;
        var message = new $root.InfRouterHeatBeat();
        if (object.nowTimeSec != null)
            message.nowTimeSec = object.nowTimeSec | 0;
        return message;
    };

    /**
     * Creates a plain object from an InfRouterHeatBeat message. Also converts values to other types if specified.
     * @function toObject
     * @memberof InfRouterHeatBeat
     * @static
     * @param {InfRouterHeatBeat} message InfRouterHeatBeat
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    InfRouterHeatBeat.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.nowTimeSec = 0;
        if (message.nowTimeSec != null && message.hasOwnProperty("nowTimeSec"))
            object.nowTimeSec = message.nowTimeSec;
        return object;
    };

    /**
     * Converts this InfRouterHeatBeat to JSON.
     * @function toJSON
     * @memberof InfRouterHeatBeat
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    InfRouterHeatBeat.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return InfRouterHeatBeat;
})();

$root.ReqGetPlayerInfo = (function() {

    /**
     * Properties of a ReqGetPlayerInfo.
     * @exports IReqGetPlayerInfo
     * @interface IReqGetPlayerInfo
     * @property {number} uin ReqGetPlayerInfo uin
     * @property {number} gameID ReqGetPlayerInfo gameID
     */

    /**
     * Constructs a new ReqGetPlayerInfo.
     * @exports ReqGetPlayerInfo
     * @classdesc Represents a ReqGetPlayerInfo.
     * @implements IReqGetPlayerInfo
     * @constructor
     * @param {IReqGetPlayerInfo=} [properties] Properties to set
     */
    function ReqGetPlayerInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ReqGetPlayerInfo uin.
     * @member {number} uin
     * @memberof ReqGetPlayerInfo
     * @instance
     */
    ReqGetPlayerInfo.prototype.uin = 0;

    /**
     * ReqGetPlayerInfo gameID.
     * @member {number} gameID
     * @memberof ReqGetPlayerInfo
     * @instance
     */
    ReqGetPlayerInfo.prototype.gameID = 0;

    /**
     * Creates a new ReqGetPlayerInfo instance using the specified properties.
     * @function create
     * @memberof ReqGetPlayerInfo
     * @static
     * @param {IReqGetPlayerInfo=} [properties] Properties to set
     * @returns {ReqGetPlayerInfo} ReqGetPlayerInfo instance
     */
    ReqGetPlayerInfo.create = function create(properties) {
        return new ReqGetPlayerInfo(properties);
    };

    /**
     * Encodes the specified ReqGetPlayerInfo message. Does not implicitly {@link ReqGetPlayerInfo.verify|verify} messages.
     * @function encode
     * @memberof ReqGetPlayerInfo
     * @static
     * @param {IReqGetPlayerInfo} message ReqGetPlayerInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqGetPlayerInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.uin);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.gameID);
        return writer;
    };

    /**
     * Encodes the specified ReqGetPlayerInfo message, length delimited. Does not implicitly {@link ReqGetPlayerInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqGetPlayerInfo
     * @static
     * @param {IReqGetPlayerInfo} message ReqGetPlayerInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqGetPlayerInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReqGetPlayerInfo message from the specified reader or buffer.
     * @function decode
     * @memberof ReqGetPlayerInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqGetPlayerInfo} ReqGetPlayerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqGetPlayerInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqGetPlayerInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.uin = reader.int32();
                break;
            case 2:
                message.gameID = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("uin"))
            throw $util.ProtocolError("missing required 'uin'", { instance: message });
        if (!message.hasOwnProperty("gameID"))
            throw $util.ProtocolError("missing required 'gameID'", { instance: message });
        return message;
    };

    /**
     * Decodes a ReqGetPlayerInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqGetPlayerInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqGetPlayerInfo} ReqGetPlayerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqGetPlayerInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReqGetPlayerInfo message.
     * @function verify
     * @memberof ReqGetPlayerInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqGetPlayerInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.uin))
            return "uin: integer expected";
        if (!$util.isInteger(message.gameID))
            return "gameID: integer expected";
        return null;
    };

    /**
     * Creates a ReqGetPlayerInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqGetPlayerInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqGetPlayerInfo} ReqGetPlayerInfo
     */
    ReqGetPlayerInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqGetPlayerInfo)
            return object;
        var message = new $root.ReqGetPlayerInfo();
        if (object.uin != null)
            message.uin = object.uin | 0;
        if (object.gameID != null)
            message.gameID = object.gameID | 0;
        return message;
    };

    /**
     * Creates a plain object from a ReqGetPlayerInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqGetPlayerInfo
     * @static
     * @param {ReqGetPlayerInfo} message ReqGetPlayerInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqGetPlayerInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.uin = 0;
            object.gameID = 0;
        }
        if (message.uin != null && message.hasOwnProperty("uin"))
            object.uin = message.uin;
        if (message.gameID != null && message.hasOwnProperty("gameID"))
            object.gameID = message.gameID;
        return object;
    };

    /**
     * Converts this ReqGetPlayerInfo to JSON.
     * @function toJSON
     * @memberof ReqGetPlayerInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqGetPlayerInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ReqGetPlayerInfo;
})();

$root.RspGetPlayerInfo = (function() {

    /**
     * Properties of a RspGetPlayerInfo.
     * @exports IRspGetPlayerInfo
     * @interface IRspGetPlayerInfo
     * @property {number} resultID RspGetPlayerInfo resultID
     * @property {number} uin RspGetPlayerInfo uin
     * @property {number} gameID RspGetPlayerInfo gameID
     * @property {Array.<IPlayerKeyValue>|null} [data] RspGetPlayerInfo data
     */

    /**
     * Constructs a new RspGetPlayerInfo.
     * @exports RspGetPlayerInfo
     * @classdesc Represents a RspGetPlayerInfo.
     * @implements IRspGetPlayerInfo
     * @constructor
     * @param {IRspGetPlayerInfo=} [properties] Properties to set
     */
    function RspGetPlayerInfo(properties) {
        this.data = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RspGetPlayerInfo resultID.
     * @member {number} resultID
     * @memberof RspGetPlayerInfo
     * @instance
     */
    RspGetPlayerInfo.prototype.resultID = 0;

    /**
     * RspGetPlayerInfo uin.
     * @member {number} uin
     * @memberof RspGetPlayerInfo
     * @instance
     */
    RspGetPlayerInfo.prototype.uin = 0;

    /**
     * RspGetPlayerInfo gameID.
     * @member {number} gameID
     * @memberof RspGetPlayerInfo
     * @instance
     */
    RspGetPlayerInfo.prototype.gameID = 0;

    /**
     * RspGetPlayerInfo data.
     * @member {Array.<IPlayerKeyValue>} data
     * @memberof RspGetPlayerInfo
     * @instance
     */
    RspGetPlayerInfo.prototype.data = $util.emptyArray;

    /**
     * Creates a new RspGetPlayerInfo instance using the specified properties.
     * @function create
     * @memberof RspGetPlayerInfo
     * @static
     * @param {IRspGetPlayerInfo=} [properties] Properties to set
     * @returns {RspGetPlayerInfo} RspGetPlayerInfo instance
     */
    RspGetPlayerInfo.create = function create(properties) {
        return new RspGetPlayerInfo(properties);
    };

    /**
     * Encodes the specified RspGetPlayerInfo message. Does not implicitly {@link RspGetPlayerInfo.verify|verify} messages.
     * @function encode
     * @memberof RspGetPlayerInfo
     * @static
     * @param {IRspGetPlayerInfo} message RspGetPlayerInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RspGetPlayerInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.resultID);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.uin);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.gameID);
        if (message.data != null && message.data.length)
            for (var i = 0; i < message.data.length; ++i)
                $root.PlayerKeyValue.encode(message.data[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified RspGetPlayerInfo message, length delimited. Does not implicitly {@link RspGetPlayerInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RspGetPlayerInfo
     * @static
     * @param {IRspGetPlayerInfo} message RspGetPlayerInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RspGetPlayerInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RspGetPlayerInfo message from the specified reader or buffer.
     * @function decode
     * @memberof RspGetPlayerInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RspGetPlayerInfo} RspGetPlayerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RspGetPlayerInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RspGetPlayerInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.resultID = reader.int32();
                break;
            case 2:
                message.uin = reader.int32();
                break;
            case 3:
                message.gameID = reader.int32();
                break;
            case 4:
                if (!(message.data && message.data.length))
                    message.data = [];
                message.data.push($root.PlayerKeyValue.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("resultID"))
            throw $util.ProtocolError("missing required 'resultID'", { instance: message });
        if (!message.hasOwnProperty("uin"))
            throw $util.ProtocolError("missing required 'uin'", { instance: message });
        if (!message.hasOwnProperty("gameID"))
            throw $util.ProtocolError("missing required 'gameID'", { instance: message });
        return message;
    };

    /**
     * Decodes a RspGetPlayerInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RspGetPlayerInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RspGetPlayerInfo} RspGetPlayerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RspGetPlayerInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RspGetPlayerInfo message.
     * @function verify
     * @memberof RspGetPlayerInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RspGetPlayerInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.resultID))
            return "resultID: integer expected";
        if (!$util.isInteger(message.uin))
            return "uin: integer expected";
        if (!$util.isInteger(message.gameID))
            return "gameID: integer expected";
        if (message.data != null && message.hasOwnProperty("data")) {
            if (!Array.isArray(message.data))
                return "data: array expected";
            for (var i = 0; i < message.data.length; ++i) {
                var error = $root.PlayerKeyValue.verify(message.data[i]);
                if (error)
                    return "data." + error;
            }
        }
        return null;
    };

    /**
     * Creates a RspGetPlayerInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RspGetPlayerInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RspGetPlayerInfo} RspGetPlayerInfo
     */
    RspGetPlayerInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.RspGetPlayerInfo)
            return object;
        var message = new $root.RspGetPlayerInfo();
        if (object.resultID != null)
            message.resultID = object.resultID | 0;
        if (object.uin != null)
            message.uin = object.uin | 0;
        if (object.gameID != null)
            message.gameID = object.gameID | 0;
        if (object.data) {
            if (!Array.isArray(object.data))
                throw TypeError(".RspGetPlayerInfo.data: array expected");
            message.data = [];
            for (var i = 0; i < object.data.length; ++i) {
                if (typeof object.data[i] !== "object")
                    throw TypeError(".RspGetPlayerInfo.data: object expected");
                message.data[i] = $root.PlayerKeyValue.fromObject(object.data[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a RspGetPlayerInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RspGetPlayerInfo
     * @static
     * @param {RspGetPlayerInfo} message RspGetPlayerInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RspGetPlayerInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.data = [];
        if (options.defaults) {
            object.resultID = 0;
            object.uin = 0;
            object.gameID = 0;
        }
        if (message.resultID != null && message.hasOwnProperty("resultID"))
            object.resultID = message.resultID;
        if (message.uin != null && message.hasOwnProperty("uin"))
            object.uin = message.uin;
        if (message.gameID != null && message.hasOwnProperty("gameID"))
            object.gameID = message.gameID;
        if (message.data && message.data.length) {
            object.data = [];
            for (var j = 0; j < message.data.length; ++j)
                object.data[j] = $root.PlayerKeyValue.toObject(message.data[j], options);
        }
        return object;
    };

    /**
     * Converts this RspGetPlayerInfo to JSON.
     * @function toJSON
     * @memberof RspGetPlayerInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RspGetPlayerInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RspGetPlayerInfo;
})();

$root.ReqExecUpdate = (function() {

    /**
     * Properties of a ReqExecUpdate.
     * @exports IReqExecUpdate
     * @interface IReqExecUpdate
     * @property {number} uin ReqExecUpdate uin
     * @property {number} gameID ReqExecUpdate gameID
     * @property {number} groupID ReqExecUpdate groupID
     * @property {string} sql ReqExecUpdate sql
     */

    /**
     * Constructs a new ReqExecUpdate.
     * @exports ReqExecUpdate
     * @classdesc Represents a ReqExecUpdate.
     * @implements IReqExecUpdate
     * @constructor
     * @param {IReqExecUpdate=} [properties] Properties to set
     */
    function ReqExecUpdate(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ReqExecUpdate uin.
     * @member {number} uin
     * @memberof ReqExecUpdate
     * @instance
     */
    ReqExecUpdate.prototype.uin = 0;

    /**
     * ReqExecUpdate gameID.
     * @member {number} gameID
     * @memberof ReqExecUpdate
     * @instance
     */
    ReqExecUpdate.prototype.gameID = 0;

    /**
     * ReqExecUpdate groupID.
     * @member {number} groupID
     * @memberof ReqExecUpdate
     * @instance
     */
    ReqExecUpdate.prototype.groupID = 0;

    /**
     * ReqExecUpdate sql.
     * @member {string} sql
     * @memberof ReqExecUpdate
     * @instance
     */
    ReqExecUpdate.prototype.sql = "";

    /**
     * Creates a new ReqExecUpdate instance using the specified properties.
     * @function create
     * @memberof ReqExecUpdate
     * @static
     * @param {IReqExecUpdate=} [properties] Properties to set
     * @returns {ReqExecUpdate} ReqExecUpdate instance
     */
    ReqExecUpdate.create = function create(properties) {
        return new ReqExecUpdate(properties);
    };

    /**
     * Encodes the specified ReqExecUpdate message. Does not implicitly {@link ReqExecUpdate.verify|verify} messages.
     * @function encode
     * @memberof ReqExecUpdate
     * @static
     * @param {IReqExecUpdate} message ReqExecUpdate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqExecUpdate.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.uin);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.gameID);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.groupID);
        writer.uint32(/* id 4, wireType 2 =*/34).string(message.sql);
        return writer;
    };

    /**
     * Encodes the specified ReqExecUpdate message, length delimited. Does not implicitly {@link ReqExecUpdate.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqExecUpdate
     * @static
     * @param {IReqExecUpdate} message ReqExecUpdate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqExecUpdate.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReqExecUpdate message from the specified reader or buffer.
     * @function decode
     * @memberof ReqExecUpdate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqExecUpdate} ReqExecUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqExecUpdate.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqExecUpdate();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.uin = reader.int32();
                break;
            case 2:
                message.gameID = reader.int32();
                break;
            case 3:
                message.groupID = reader.int32();
                break;
            case 4:
                message.sql = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("uin"))
            throw $util.ProtocolError("missing required 'uin'", { instance: message });
        if (!message.hasOwnProperty("gameID"))
            throw $util.ProtocolError("missing required 'gameID'", { instance: message });
        if (!message.hasOwnProperty("groupID"))
            throw $util.ProtocolError("missing required 'groupID'", { instance: message });
        if (!message.hasOwnProperty("sql"))
            throw $util.ProtocolError("missing required 'sql'", { instance: message });
        return message;
    };

    /**
     * Decodes a ReqExecUpdate message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqExecUpdate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqExecUpdate} ReqExecUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqExecUpdate.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReqExecUpdate message.
     * @function verify
     * @memberof ReqExecUpdate
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqExecUpdate.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.uin))
            return "uin: integer expected";
        if (!$util.isInteger(message.gameID))
            return "gameID: integer expected";
        if (!$util.isInteger(message.groupID))
            return "groupID: integer expected";
        if (!$util.isString(message.sql))
            return "sql: string expected";
        return null;
    };

    /**
     * Creates a ReqExecUpdate message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqExecUpdate
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqExecUpdate} ReqExecUpdate
     */
    ReqExecUpdate.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqExecUpdate)
            return object;
        var message = new $root.ReqExecUpdate();
        if (object.uin != null)
            message.uin = object.uin | 0;
        if (object.gameID != null)
            message.gameID = object.gameID | 0;
        if (object.groupID != null)
            message.groupID = object.groupID | 0;
        if (object.sql != null)
            message.sql = String(object.sql);
        return message;
    };

    /**
     * Creates a plain object from a ReqExecUpdate message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqExecUpdate
     * @static
     * @param {ReqExecUpdate} message ReqExecUpdate
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqExecUpdate.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.uin = 0;
            object.gameID = 0;
            object.groupID = 0;
            object.sql = "";
        }
        if (message.uin != null && message.hasOwnProperty("uin"))
            object.uin = message.uin;
        if (message.gameID != null && message.hasOwnProperty("gameID"))
            object.gameID = message.gameID;
        if (message.groupID != null && message.hasOwnProperty("groupID"))
            object.groupID = message.groupID;
        if (message.sql != null && message.hasOwnProperty("sql"))
            object.sql = message.sql;
        return object;
    };

    /**
     * Converts this ReqExecUpdate to JSON.
     * @function toJSON
     * @memberof ReqExecUpdate
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqExecUpdate.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ReqExecUpdate;
})();

$root.NotifyClientDisconnect = (function() {

    /**
     * Properties of a NotifyClientDisconnect.
     * @exports INotifyClientDisconnect
     * @interface INotifyClientDisconnect
     * @property {number} uin NotifyClientDisconnect uin
     */

    /**
     * Constructs a new NotifyClientDisconnect.
     * @exports NotifyClientDisconnect
     * @classdesc Represents a NotifyClientDisconnect.
     * @implements INotifyClientDisconnect
     * @constructor
     * @param {INotifyClientDisconnect=} [properties] Properties to set
     */
    function NotifyClientDisconnect(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * NotifyClientDisconnect uin.
     * @member {number} uin
     * @memberof NotifyClientDisconnect
     * @instance
     */
    NotifyClientDisconnect.prototype.uin = 0;

    /**
     * Creates a new NotifyClientDisconnect instance using the specified properties.
     * @function create
     * @memberof NotifyClientDisconnect
     * @static
     * @param {INotifyClientDisconnect=} [properties] Properties to set
     * @returns {NotifyClientDisconnect} NotifyClientDisconnect instance
     */
    NotifyClientDisconnect.create = function create(properties) {
        return new NotifyClientDisconnect(properties);
    };

    /**
     * Encodes the specified NotifyClientDisconnect message. Does not implicitly {@link NotifyClientDisconnect.verify|verify} messages.
     * @function encode
     * @memberof NotifyClientDisconnect
     * @static
     * @param {INotifyClientDisconnect} message NotifyClientDisconnect message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NotifyClientDisconnect.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.uin);
        return writer;
    };

    /**
     * Encodes the specified NotifyClientDisconnect message, length delimited. Does not implicitly {@link NotifyClientDisconnect.verify|verify} messages.
     * @function encodeDelimited
     * @memberof NotifyClientDisconnect
     * @static
     * @param {INotifyClientDisconnect} message NotifyClientDisconnect message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NotifyClientDisconnect.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a NotifyClientDisconnect message from the specified reader or buffer.
     * @function decode
     * @memberof NotifyClientDisconnect
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {NotifyClientDisconnect} NotifyClientDisconnect
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NotifyClientDisconnect.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NotifyClientDisconnect();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.uin = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("uin"))
            throw $util.ProtocolError("missing required 'uin'", { instance: message });
        return message;
    };

    /**
     * Decodes a NotifyClientDisconnect message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof NotifyClientDisconnect
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {NotifyClientDisconnect} NotifyClientDisconnect
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NotifyClientDisconnect.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a NotifyClientDisconnect message.
     * @function verify
     * @memberof NotifyClientDisconnect
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    NotifyClientDisconnect.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.uin))
            return "uin: integer expected";
        return null;
    };

    /**
     * Creates a NotifyClientDisconnect message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof NotifyClientDisconnect
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {NotifyClientDisconnect} NotifyClientDisconnect
     */
    NotifyClientDisconnect.fromObject = function fromObject(object) {
        if (object instanceof $root.NotifyClientDisconnect)
            return object;
        var message = new $root.NotifyClientDisconnect();
        if (object.uin != null)
            message.uin = object.uin | 0;
        return message;
    };

    /**
     * Creates a plain object from a NotifyClientDisconnect message. Also converts values to other types if specified.
     * @function toObject
     * @memberof NotifyClientDisconnect
     * @static
     * @param {NotifyClientDisconnect} message NotifyClientDisconnect
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    NotifyClientDisconnect.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.uin = 0;
        if (message.uin != null && message.hasOwnProperty("uin"))
            object.uin = message.uin;
        return object;
    };

    /**
     * Converts this NotifyClientDisconnect to JSON.
     * @function toJSON
     * @memberof NotifyClientDisconnect
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    NotifyClientDisconnect.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return NotifyClientDisconnect;
})();

$root.InfPlayerDisconnect = (function() {

    /**
     * Properties of an InfPlayerDisconnect.
     * @exports IInfPlayerDisconnect
     * @interface IInfPlayerDisconnect
     * @property {number} uin InfPlayerDisconnect uin
     */

    /**
     * Constructs a new InfPlayerDisconnect.
     * @exports InfPlayerDisconnect
     * @classdesc Represents an InfPlayerDisconnect.
     * @implements IInfPlayerDisconnect
     * @constructor
     * @param {IInfPlayerDisconnect=} [properties] Properties to set
     */
    function InfPlayerDisconnect(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * InfPlayerDisconnect uin.
     * @member {number} uin
     * @memberof InfPlayerDisconnect
     * @instance
     */
    InfPlayerDisconnect.prototype.uin = 0;

    /**
     * Creates a new InfPlayerDisconnect instance using the specified properties.
     * @function create
     * @memberof InfPlayerDisconnect
     * @static
     * @param {IInfPlayerDisconnect=} [properties] Properties to set
     * @returns {InfPlayerDisconnect} InfPlayerDisconnect instance
     */
    InfPlayerDisconnect.create = function create(properties) {
        return new InfPlayerDisconnect(properties);
    };

    /**
     * Encodes the specified InfPlayerDisconnect message. Does not implicitly {@link InfPlayerDisconnect.verify|verify} messages.
     * @function encode
     * @memberof InfPlayerDisconnect
     * @static
     * @param {IInfPlayerDisconnect} message InfPlayerDisconnect message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    InfPlayerDisconnect.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.uin);
        return writer;
    };

    /**
     * Encodes the specified InfPlayerDisconnect message, length delimited. Does not implicitly {@link InfPlayerDisconnect.verify|verify} messages.
     * @function encodeDelimited
     * @memberof InfPlayerDisconnect
     * @static
     * @param {IInfPlayerDisconnect} message InfPlayerDisconnect message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    InfPlayerDisconnect.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an InfPlayerDisconnect message from the specified reader or buffer.
     * @function decode
     * @memberof InfPlayerDisconnect
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {InfPlayerDisconnect} InfPlayerDisconnect
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    InfPlayerDisconnect.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.InfPlayerDisconnect();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.uin = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("uin"))
            throw $util.ProtocolError("missing required 'uin'", { instance: message });
        return message;
    };

    /**
     * Decodes an InfPlayerDisconnect message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof InfPlayerDisconnect
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {InfPlayerDisconnect} InfPlayerDisconnect
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    InfPlayerDisconnect.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an InfPlayerDisconnect message.
     * @function verify
     * @memberof InfPlayerDisconnect
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    InfPlayerDisconnect.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.uin))
            return "uin: integer expected";
        return null;
    };

    /**
     * Creates an InfPlayerDisconnect message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof InfPlayerDisconnect
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {InfPlayerDisconnect} InfPlayerDisconnect
     */
    InfPlayerDisconnect.fromObject = function fromObject(object) {
        if (object instanceof $root.InfPlayerDisconnect)
            return object;
        var message = new $root.InfPlayerDisconnect();
        if (object.uin != null)
            message.uin = object.uin | 0;
        return message;
    };

    /**
     * Creates a plain object from an InfPlayerDisconnect message. Also converts values to other types if specified.
     * @function toObject
     * @memberof InfPlayerDisconnect
     * @static
     * @param {InfPlayerDisconnect} message InfPlayerDisconnect
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    InfPlayerDisconnect.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.uin = 0;
        if (message.uin != null && message.hasOwnProperty("uin"))
            object.uin = message.uin;
        return object;
    };

    /**
     * Converts this InfPlayerDisconnect to JSON.
     * @function toJSON
     * @memberof InfPlayerDisconnect
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    InfPlayerDisconnect.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return InfPlayerDisconnect;
})();

$root.ReqRegistToGMServer = (function() {

    /**
     * Properties of a ReqRegistToGMServer.
     * @exports IReqRegistToGMServer
     * @interface IReqRegistToGMServer
     * @property {number} gameID ReqRegistToGMServer gameID
     * @property {number} groupID ReqRegistToGMServer groupID
     */

    /**
     * Constructs a new ReqRegistToGMServer.
     * @exports ReqRegistToGMServer
     * @classdesc Represents a ReqRegistToGMServer.
     * @implements IReqRegistToGMServer
     * @constructor
     * @param {IReqRegistToGMServer=} [properties] Properties to set
     */
    function ReqRegistToGMServer(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ReqRegistToGMServer gameID.
     * @member {number} gameID
     * @memberof ReqRegistToGMServer
     * @instance
     */
    ReqRegistToGMServer.prototype.gameID = 0;

    /**
     * ReqRegistToGMServer groupID.
     * @member {number} groupID
     * @memberof ReqRegistToGMServer
     * @instance
     */
    ReqRegistToGMServer.prototype.groupID = 0;

    /**
     * Creates a new ReqRegistToGMServer instance using the specified properties.
     * @function create
     * @memberof ReqRegistToGMServer
     * @static
     * @param {IReqRegistToGMServer=} [properties] Properties to set
     * @returns {ReqRegistToGMServer} ReqRegistToGMServer instance
     */
    ReqRegistToGMServer.create = function create(properties) {
        return new ReqRegistToGMServer(properties);
    };

    /**
     * Encodes the specified ReqRegistToGMServer message. Does not implicitly {@link ReqRegistToGMServer.verify|verify} messages.
     * @function encode
     * @memberof ReqRegistToGMServer
     * @static
     * @param {IReqRegistToGMServer} message ReqRegistToGMServer message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqRegistToGMServer.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.gameID);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.groupID);
        return writer;
    };

    /**
     * Encodes the specified ReqRegistToGMServer message, length delimited. Does not implicitly {@link ReqRegistToGMServer.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqRegistToGMServer
     * @static
     * @param {IReqRegistToGMServer} message ReqRegistToGMServer message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqRegistToGMServer.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReqRegistToGMServer message from the specified reader or buffer.
     * @function decode
     * @memberof ReqRegistToGMServer
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqRegistToGMServer} ReqRegistToGMServer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqRegistToGMServer.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqRegistToGMServer();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.gameID = reader.int32();
                break;
            case 2:
                message.groupID = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("gameID"))
            throw $util.ProtocolError("missing required 'gameID'", { instance: message });
        if (!message.hasOwnProperty("groupID"))
            throw $util.ProtocolError("missing required 'groupID'", { instance: message });
        return message;
    };

    /**
     * Decodes a ReqRegistToGMServer message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqRegistToGMServer
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqRegistToGMServer} ReqRegistToGMServer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqRegistToGMServer.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReqRegistToGMServer message.
     * @function verify
     * @memberof ReqRegistToGMServer
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqRegistToGMServer.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.gameID))
            return "gameID: integer expected";
        if (!$util.isInteger(message.groupID))
            return "groupID: integer expected";
        return null;
    };

    /**
     * Creates a ReqRegistToGMServer message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqRegistToGMServer
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqRegistToGMServer} ReqRegistToGMServer
     */
    ReqRegistToGMServer.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqRegistToGMServer)
            return object;
        var message = new $root.ReqRegistToGMServer();
        if (object.gameID != null)
            message.gameID = object.gameID | 0;
        if (object.groupID != null)
            message.groupID = object.groupID | 0;
        return message;
    };

    /**
     * Creates a plain object from a ReqRegistToGMServer message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqRegistToGMServer
     * @static
     * @param {ReqRegistToGMServer} message ReqRegistToGMServer
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqRegistToGMServer.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.gameID = 0;
            object.groupID = 0;
        }
        if (message.gameID != null && message.hasOwnProperty("gameID"))
            object.gameID = message.gameID;
        if (message.groupID != null && message.hasOwnProperty("groupID"))
            object.groupID = message.groupID;
        return object;
    };

    /**
     * Converts this ReqRegistToGMServer to JSON.
     * @function toJSON
     * @memberof ReqRegistToGMServer
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqRegistToGMServer.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ReqRegistToGMServer;
})();

$root.RspRegistToGMServer = (function() {

    /**
     * Properties of a RspRegistToGMServer.
     * @exports IRspRegistToGMServer
     * @interface IRspRegistToGMServer
     * @property {number} resultID RspRegistToGMServer resultID
     */

    /**
     * Constructs a new RspRegistToGMServer.
     * @exports RspRegistToGMServer
     * @classdesc Represents a RspRegistToGMServer.
     * @implements IRspRegistToGMServer
     * @constructor
     * @param {IRspRegistToGMServer=} [properties] Properties to set
     */
    function RspRegistToGMServer(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RspRegistToGMServer resultID.
     * @member {number} resultID
     * @memberof RspRegistToGMServer
     * @instance
     */
    RspRegistToGMServer.prototype.resultID = 0;

    /**
     * Creates a new RspRegistToGMServer instance using the specified properties.
     * @function create
     * @memberof RspRegistToGMServer
     * @static
     * @param {IRspRegistToGMServer=} [properties] Properties to set
     * @returns {RspRegistToGMServer} RspRegistToGMServer instance
     */
    RspRegistToGMServer.create = function create(properties) {
        return new RspRegistToGMServer(properties);
    };

    /**
     * Encodes the specified RspRegistToGMServer message. Does not implicitly {@link RspRegistToGMServer.verify|verify} messages.
     * @function encode
     * @memberof RspRegistToGMServer
     * @static
     * @param {IRspRegistToGMServer} message RspRegistToGMServer message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RspRegistToGMServer.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.resultID);
        return writer;
    };

    /**
     * Encodes the specified RspRegistToGMServer message, length delimited. Does not implicitly {@link RspRegistToGMServer.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RspRegistToGMServer
     * @static
     * @param {IRspRegistToGMServer} message RspRegistToGMServer message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RspRegistToGMServer.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RspRegistToGMServer message from the specified reader or buffer.
     * @function decode
     * @memberof RspRegistToGMServer
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RspRegistToGMServer} RspRegistToGMServer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RspRegistToGMServer.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RspRegistToGMServer();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.resultID = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("resultID"))
            throw $util.ProtocolError("missing required 'resultID'", { instance: message });
        return message;
    };

    /**
     * Decodes a RspRegistToGMServer message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RspRegistToGMServer
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RspRegistToGMServer} RspRegistToGMServer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RspRegistToGMServer.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RspRegistToGMServer message.
     * @function verify
     * @memberof RspRegistToGMServer
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RspRegistToGMServer.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.resultID))
            return "resultID: integer expected";
        return null;
    };

    /**
     * Creates a RspRegistToGMServer message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RspRegistToGMServer
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RspRegistToGMServer} RspRegistToGMServer
     */
    RspRegistToGMServer.fromObject = function fromObject(object) {
        if (object instanceof $root.RspRegistToGMServer)
            return object;
        var message = new $root.RspRegistToGMServer();
        if (object.resultID != null)
            message.resultID = object.resultID | 0;
        return message;
    };

    /**
     * Creates a plain object from a RspRegistToGMServer message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RspRegistToGMServer
     * @static
     * @param {RspRegistToGMServer} message RspRegistToGMServer
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RspRegistToGMServer.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.resultID = 0;
        if (message.resultID != null && message.hasOwnProperty("resultID"))
            object.resultID = message.resultID;
        return object;
    };

    /**
     * Converts this RspRegistToGMServer to JSON.
     * @function toJSON
     * @memberof RspRegistToGMServer
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RspRegistToGMServer.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RspRegistToGMServer;
})();

$root.ReqDBRegisterToDBMgr = (function() {

    /**
     * Properties of a ReqDBRegisterToDBMgr.
     * @exports IReqDBRegisterToDBMgr
     * @interface IReqDBRegisterToDBMgr
     * @property {number} intranetIp ReqDBRegisterToDBMgr intranetIp
     * @property {number} intranetPort ReqDBRegisterToDBMgr intranetPort
     */

    /**
     * Constructs a new ReqDBRegisterToDBMgr.
     * @exports ReqDBRegisterToDBMgr
     * @classdesc Represents a ReqDBRegisterToDBMgr.
     * @implements IReqDBRegisterToDBMgr
     * @constructor
     * @param {IReqDBRegisterToDBMgr=} [properties] Properties to set
     */
    function ReqDBRegisterToDBMgr(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ReqDBRegisterToDBMgr intranetIp.
     * @member {number} intranetIp
     * @memberof ReqDBRegisterToDBMgr
     * @instance
     */
    ReqDBRegisterToDBMgr.prototype.intranetIp = 0;

    /**
     * ReqDBRegisterToDBMgr intranetPort.
     * @member {number} intranetPort
     * @memberof ReqDBRegisterToDBMgr
     * @instance
     */
    ReqDBRegisterToDBMgr.prototype.intranetPort = 0;

    /**
     * Creates a new ReqDBRegisterToDBMgr instance using the specified properties.
     * @function create
     * @memberof ReqDBRegisterToDBMgr
     * @static
     * @param {IReqDBRegisterToDBMgr=} [properties] Properties to set
     * @returns {ReqDBRegisterToDBMgr} ReqDBRegisterToDBMgr instance
     */
    ReqDBRegisterToDBMgr.create = function create(properties) {
        return new ReqDBRegisterToDBMgr(properties);
    };

    /**
     * Encodes the specified ReqDBRegisterToDBMgr message. Does not implicitly {@link ReqDBRegisterToDBMgr.verify|verify} messages.
     * @function encode
     * @memberof ReqDBRegisterToDBMgr
     * @static
     * @param {IReqDBRegisterToDBMgr} message ReqDBRegisterToDBMgr message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqDBRegisterToDBMgr.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.intranetIp);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.intranetPort);
        return writer;
    };

    /**
     * Encodes the specified ReqDBRegisterToDBMgr message, length delimited. Does not implicitly {@link ReqDBRegisterToDBMgr.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqDBRegisterToDBMgr
     * @static
     * @param {IReqDBRegisterToDBMgr} message ReqDBRegisterToDBMgr message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqDBRegisterToDBMgr.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReqDBRegisterToDBMgr message from the specified reader or buffer.
     * @function decode
     * @memberof ReqDBRegisterToDBMgr
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqDBRegisterToDBMgr} ReqDBRegisterToDBMgr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqDBRegisterToDBMgr.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqDBRegisterToDBMgr();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.intranetIp = reader.uint32();
                break;
            case 2:
                message.intranetPort = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("intranetIp"))
            throw $util.ProtocolError("missing required 'intranetIp'", { instance: message });
        if (!message.hasOwnProperty("intranetPort"))
            throw $util.ProtocolError("missing required 'intranetPort'", { instance: message });
        return message;
    };

    /**
     * Decodes a ReqDBRegisterToDBMgr message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqDBRegisterToDBMgr
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqDBRegisterToDBMgr} ReqDBRegisterToDBMgr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqDBRegisterToDBMgr.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReqDBRegisterToDBMgr message.
     * @function verify
     * @memberof ReqDBRegisterToDBMgr
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqDBRegisterToDBMgr.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.intranetIp))
            return "intranetIp: integer expected";
        if (!$util.isInteger(message.intranetPort))
            return "intranetPort: integer expected";
        return null;
    };

    /**
     * Creates a ReqDBRegisterToDBMgr message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqDBRegisterToDBMgr
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqDBRegisterToDBMgr} ReqDBRegisterToDBMgr
     */
    ReqDBRegisterToDBMgr.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqDBRegisterToDBMgr)
            return object;
        var message = new $root.ReqDBRegisterToDBMgr();
        if (object.intranetIp != null)
            message.intranetIp = object.intranetIp >>> 0;
        if (object.intranetPort != null)
            message.intranetPort = object.intranetPort | 0;
        return message;
    };

    /**
     * Creates a plain object from a ReqDBRegisterToDBMgr message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqDBRegisterToDBMgr
     * @static
     * @param {ReqDBRegisterToDBMgr} message ReqDBRegisterToDBMgr
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqDBRegisterToDBMgr.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.intranetIp = 0;
            object.intranetPort = 0;
        }
        if (message.intranetIp != null && message.hasOwnProperty("intranetIp"))
            object.intranetIp = message.intranetIp;
        if (message.intranetPort != null && message.hasOwnProperty("intranetPort"))
            object.intranetPort = message.intranetPort;
        return object;
    };

    /**
     * Converts this ReqDBRegisterToDBMgr to JSON.
     * @function toJSON
     * @memberof ReqDBRegisterToDBMgr
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqDBRegisterToDBMgr.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ReqDBRegisterToDBMgr;
})();

$root.ReqDBHeartBeatToDBMgr = (function() {

    /**
     * Properties of a ReqDBHeartBeatToDBMgr.
     * @exports IReqDBHeartBeatToDBMgr
     * @interface IReqDBHeartBeatToDBMgr
     * @property {number} burden ReqDBHeartBeatToDBMgr burden
     */

    /**
     * Constructs a new ReqDBHeartBeatToDBMgr.
     * @exports ReqDBHeartBeatToDBMgr
     * @classdesc Represents a ReqDBHeartBeatToDBMgr.
     * @implements IReqDBHeartBeatToDBMgr
     * @constructor
     * @param {IReqDBHeartBeatToDBMgr=} [properties] Properties to set
     */
    function ReqDBHeartBeatToDBMgr(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ReqDBHeartBeatToDBMgr burden.
     * @member {number} burden
     * @memberof ReqDBHeartBeatToDBMgr
     * @instance
     */
    ReqDBHeartBeatToDBMgr.prototype.burden = 0;

    /**
     * Creates a new ReqDBHeartBeatToDBMgr instance using the specified properties.
     * @function create
     * @memberof ReqDBHeartBeatToDBMgr
     * @static
     * @param {IReqDBHeartBeatToDBMgr=} [properties] Properties to set
     * @returns {ReqDBHeartBeatToDBMgr} ReqDBHeartBeatToDBMgr instance
     */
    ReqDBHeartBeatToDBMgr.create = function create(properties) {
        return new ReqDBHeartBeatToDBMgr(properties);
    };

    /**
     * Encodes the specified ReqDBHeartBeatToDBMgr message. Does not implicitly {@link ReqDBHeartBeatToDBMgr.verify|verify} messages.
     * @function encode
     * @memberof ReqDBHeartBeatToDBMgr
     * @static
     * @param {IReqDBHeartBeatToDBMgr} message ReqDBHeartBeatToDBMgr message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqDBHeartBeatToDBMgr.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.burden);
        return writer;
    };

    /**
     * Encodes the specified ReqDBHeartBeatToDBMgr message, length delimited. Does not implicitly {@link ReqDBHeartBeatToDBMgr.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqDBHeartBeatToDBMgr
     * @static
     * @param {IReqDBHeartBeatToDBMgr} message ReqDBHeartBeatToDBMgr message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqDBHeartBeatToDBMgr.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReqDBHeartBeatToDBMgr message from the specified reader or buffer.
     * @function decode
     * @memberof ReqDBHeartBeatToDBMgr
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqDBHeartBeatToDBMgr} ReqDBHeartBeatToDBMgr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqDBHeartBeatToDBMgr.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqDBHeartBeatToDBMgr();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.burden = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("burden"))
            throw $util.ProtocolError("missing required 'burden'", { instance: message });
        return message;
    };

    /**
     * Decodes a ReqDBHeartBeatToDBMgr message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqDBHeartBeatToDBMgr
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqDBHeartBeatToDBMgr} ReqDBHeartBeatToDBMgr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqDBHeartBeatToDBMgr.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReqDBHeartBeatToDBMgr message.
     * @function verify
     * @memberof ReqDBHeartBeatToDBMgr
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqDBHeartBeatToDBMgr.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.burden))
            return "burden: integer expected";
        return null;
    };

    /**
     * Creates a ReqDBHeartBeatToDBMgr message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqDBHeartBeatToDBMgr
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqDBHeartBeatToDBMgr} ReqDBHeartBeatToDBMgr
     */
    ReqDBHeartBeatToDBMgr.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqDBHeartBeatToDBMgr)
            return object;
        var message = new $root.ReqDBHeartBeatToDBMgr();
        if (object.burden != null)
            message.burden = object.burden | 0;
        return message;
    };

    /**
     * Creates a plain object from a ReqDBHeartBeatToDBMgr message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqDBHeartBeatToDBMgr
     * @static
     * @param {ReqDBHeartBeatToDBMgr} message ReqDBHeartBeatToDBMgr
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqDBHeartBeatToDBMgr.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.burden = 0;
        if (message.burden != null && message.hasOwnProperty("burden"))
            object.burden = message.burden;
        return object;
    };

    /**
     * Converts this ReqDBHeartBeatToDBMgr to JSON.
     * @function toJSON
     * @memberof ReqDBHeartBeatToDBMgr
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqDBHeartBeatToDBMgr.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ReqDBHeartBeatToDBMgr;
})();

$root.RspAssignDBInfo = (function() {

    /**
     * Properties of a RspAssignDBInfo.
     * @exports IRspAssignDBInfo
     * @interface IRspAssignDBInfo
     * @property {number} resultId RspAssignDBInfo resultId
     * @property {number} intranetIp RspAssignDBInfo intranetIp
     * @property {number} intranetPort RspAssignDBInfo intranetPort
     */

    /**
     * Constructs a new RspAssignDBInfo.
     * @exports RspAssignDBInfo
     * @classdesc Represents a RspAssignDBInfo.
     * @implements IRspAssignDBInfo
     * @constructor
     * @param {IRspAssignDBInfo=} [properties] Properties to set
     */
    function RspAssignDBInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RspAssignDBInfo resultId.
     * @member {number} resultId
     * @memberof RspAssignDBInfo
     * @instance
     */
    RspAssignDBInfo.prototype.resultId = 0;

    /**
     * RspAssignDBInfo intranetIp.
     * @member {number} intranetIp
     * @memberof RspAssignDBInfo
     * @instance
     */
    RspAssignDBInfo.prototype.intranetIp = 0;

    /**
     * RspAssignDBInfo intranetPort.
     * @member {number} intranetPort
     * @memberof RspAssignDBInfo
     * @instance
     */
    RspAssignDBInfo.prototype.intranetPort = 0;

    /**
     * Creates a new RspAssignDBInfo instance using the specified properties.
     * @function create
     * @memberof RspAssignDBInfo
     * @static
     * @param {IRspAssignDBInfo=} [properties] Properties to set
     * @returns {RspAssignDBInfo} RspAssignDBInfo instance
     */
    RspAssignDBInfo.create = function create(properties) {
        return new RspAssignDBInfo(properties);
    };

    /**
     * Encodes the specified RspAssignDBInfo message. Does not implicitly {@link RspAssignDBInfo.verify|verify} messages.
     * @function encode
     * @memberof RspAssignDBInfo
     * @static
     * @param {IRspAssignDBInfo} message RspAssignDBInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RspAssignDBInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.resultId);
        writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.intranetIp);
        writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.intranetPort);
        return writer;
    };

    /**
     * Encodes the specified RspAssignDBInfo message, length delimited. Does not implicitly {@link RspAssignDBInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RspAssignDBInfo
     * @static
     * @param {IRspAssignDBInfo} message RspAssignDBInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RspAssignDBInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RspAssignDBInfo message from the specified reader or buffer.
     * @function decode
     * @memberof RspAssignDBInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RspAssignDBInfo} RspAssignDBInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RspAssignDBInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RspAssignDBInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.resultId = reader.int32();
                break;
            case 2:
                message.intranetIp = reader.uint32();
                break;
            case 3:
                message.intranetPort = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("resultId"))
            throw $util.ProtocolError("missing required 'resultId'", { instance: message });
        if (!message.hasOwnProperty("intranetIp"))
            throw $util.ProtocolError("missing required 'intranetIp'", { instance: message });
        if (!message.hasOwnProperty("intranetPort"))
            throw $util.ProtocolError("missing required 'intranetPort'", { instance: message });
        return message;
    };

    /**
     * Decodes a RspAssignDBInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RspAssignDBInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RspAssignDBInfo} RspAssignDBInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RspAssignDBInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RspAssignDBInfo message.
     * @function verify
     * @memberof RspAssignDBInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RspAssignDBInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.resultId))
            return "resultId: integer expected";
        if (!$util.isInteger(message.intranetIp))
            return "intranetIp: integer expected";
        if (!$util.isInteger(message.intranetPort))
            return "intranetPort: integer expected";
        return null;
    };

    /**
     * Creates a RspAssignDBInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RspAssignDBInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RspAssignDBInfo} RspAssignDBInfo
     */
    RspAssignDBInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.RspAssignDBInfo)
            return object;
        var message = new $root.RspAssignDBInfo();
        if (object.resultId != null)
            message.resultId = object.resultId | 0;
        if (object.intranetIp != null)
            message.intranetIp = object.intranetIp >>> 0;
        if (object.intranetPort != null)
            message.intranetPort = object.intranetPort >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a RspAssignDBInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RspAssignDBInfo
     * @static
     * @param {RspAssignDBInfo} message RspAssignDBInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RspAssignDBInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.resultId = 0;
            object.intranetIp = 0;
            object.intranetPort = 0;
        }
        if (message.resultId != null && message.hasOwnProperty("resultId"))
            object.resultId = message.resultId;
        if (message.intranetIp != null && message.hasOwnProperty("intranetIp"))
            object.intranetIp = message.intranetIp;
        if (message.intranetPort != null && message.hasOwnProperty("intranetPort"))
            object.intranetPort = message.intranetPort;
        return object;
    };

    /**
     * Converts this RspAssignDBInfo to JSON.
     * @function toJSON
     * @memberof RspAssignDBInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RspAssignDBInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RspAssignDBInfo;
})();

module.exports = $root;
