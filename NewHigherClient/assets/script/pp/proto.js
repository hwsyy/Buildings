/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

/**
 * GlobalProtoID enum.
 * @exports GlobalProtoID
 * @enum {string}
 * @property {number} REQ_GET_PLAYER_MAX_SCORE=100001 REQ_GET_PLAYER_MAX_SCORE value
 * @property {number} RSP_GET_PLAYER_MAX_SCORE=100002 RSP_GET_PLAYER_MAX_SCORE value
 * @property {number} REQ_PLAYER_RANKLIST=100003 REQ_PLAYER_RANKLIST value
 * @property {number} RSP_PLAYER_RANKLIST=100004 RSP_PLAYER_RANKLIST value
 * @property {number} REQ_UPDATE_PLAY_MAX_SCORE=100005 REQ_UPDATE_PLAY_MAX_SCORE value
 * @property {number} REQ_GET_PLAYER_NEARBY_RANK=100006 REQ_GET_PLAYER_NEARBY_RANK value
 * @property {number} RSP_GET_PLAYER_NEARBY_RANK=100007 RSP_GET_PLAYER_NEARBY_RANK value
 */
$root.GlobalProtoID = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[100001] = "REQ_GET_PLAYER_MAX_SCORE"] = 100001;
    values[valuesById[100002] = "RSP_GET_PLAYER_MAX_SCORE"] = 100002;
    values[valuesById[100003] = "REQ_PLAYER_RANKLIST"] = 100003;
    values[valuesById[100004] = "RSP_PLAYER_RANKLIST"] = 100004;
    values[valuesById[100005] = "REQ_UPDATE_PLAY_MAX_SCORE"] = 100005;
    values[valuesById[100006] = "REQ_GET_PLAYER_NEARBY_RANK"] = 100006;
    values[valuesById[100007] = "RSP_GET_PLAYER_NEARBY_RANK"] = 100007;
    return values;
})();

/**
 * GameProtoID enum.
 * @exports GameProtoID
 * @enum {string}
 * @property {number} REQ_PLAYER_ACTION=200001 REQ_PLAYER_ACTION value
 * @property {number} INF_PLAYER_ACTION=200002 INF_PLAYER_ACTION value
 * @property {number} REQ_UPDATE_PLAYER_MAX_SCORE=200003 REQ_UPDATE_PLAYER_MAX_SCORE value
 */
$root.GameProtoID = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[200001] = "REQ_PLAYER_ACTION"] = 200001;
    values[valuesById[200002] = "INF_PLAYER_ACTION"] = 200002;
    values[valuesById[200003] = "REQ_UPDATE_PLAYER_MAX_SCORE"] = 200003;
    return values;
})();

$root.RspGetPlayerMaxScore = (function() {

    /**
     * Properties of a RspGetPlayerMaxScore.
     * @exports IRspGetPlayerMaxScore
     * @interface IRspGetPlayerMaxScore
     * @property {number} itype RspGetPlayerMaxScore itype
     * @property {number} score RspGetPlayerMaxScore score
     */

    /**
     * Constructs a new RspGetPlayerMaxScore.
     * @exports RspGetPlayerMaxScore
     * @classdesc Represents a RspGetPlayerMaxScore.
     * @implements IRspGetPlayerMaxScore
     * @constructor
     * @param {IRspGetPlayerMaxScore=} [properties] Properties to set
     */
    function RspGetPlayerMaxScore(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RspGetPlayerMaxScore itype.
     * @member {number} itype
     * @memberof RspGetPlayerMaxScore
     * @instance
     */
    RspGetPlayerMaxScore.prototype.itype = 0;

    /**
     * RspGetPlayerMaxScore score.
     * @member {number} score
     * @memberof RspGetPlayerMaxScore
     * @instance
     */
    RspGetPlayerMaxScore.prototype.score = 0;

    /**
     * Creates a new RspGetPlayerMaxScore instance using the specified properties.
     * @function create
     * @memberof RspGetPlayerMaxScore
     * @static
     * @param {IRspGetPlayerMaxScore=} [properties] Properties to set
     * @returns {RspGetPlayerMaxScore} RspGetPlayerMaxScore instance
     */
    RspGetPlayerMaxScore.create = function create(properties) {
        return new RspGetPlayerMaxScore(properties);
    };

    /**
     * Encodes the specified RspGetPlayerMaxScore message. Does not implicitly {@link RspGetPlayerMaxScore.verify|verify} messages.
     * @function encode
     * @memberof RspGetPlayerMaxScore
     * @static
     * @param {IRspGetPlayerMaxScore} message RspGetPlayerMaxScore message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RspGetPlayerMaxScore.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.itype);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.score);
        return writer;
    };

    /**
     * Encodes the specified RspGetPlayerMaxScore message, length delimited. Does not implicitly {@link RspGetPlayerMaxScore.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RspGetPlayerMaxScore
     * @static
     * @param {IRspGetPlayerMaxScore} message RspGetPlayerMaxScore message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RspGetPlayerMaxScore.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RspGetPlayerMaxScore message from the specified reader or buffer.
     * @function decode
     * @memberof RspGetPlayerMaxScore
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RspGetPlayerMaxScore} RspGetPlayerMaxScore
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RspGetPlayerMaxScore.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RspGetPlayerMaxScore();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.itype = reader.int32();
                break;
            case 2:
                message.score = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("itype"))
            throw $util.ProtocolError("missing required 'itype'", { instance: message });
        if (!message.hasOwnProperty("score"))
            throw $util.ProtocolError("missing required 'score'", { instance: message });
        return message;
    };

    /**
     * Decodes a RspGetPlayerMaxScore message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RspGetPlayerMaxScore
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RspGetPlayerMaxScore} RspGetPlayerMaxScore
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RspGetPlayerMaxScore.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RspGetPlayerMaxScore message.
     * @function verify
     * @memberof RspGetPlayerMaxScore
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RspGetPlayerMaxScore.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.itype))
            return "itype: integer expected";
        if (!$util.isInteger(message.score))
            return "score: integer expected";
        return null;
    };

    /**
     * Creates a RspGetPlayerMaxScore message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RspGetPlayerMaxScore
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RspGetPlayerMaxScore} RspGetPlayerMaxScore
     */
    RspGetPlayerMaxScore.fromObject = function fromObject(object) {
        if (object instanceof $root.RspGetPlayerMaxScore)
            return object;
        var message = new $root.RspGetPlayerMaxScore();
        if (object.itype != null)
            message.itype = object.itype | 0;
        if (object.score != null)
            message.score = object.score | 0;
        return message;
    };

    /**
     * Creates a plain object from a RspGetPlayerMaxScore message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RspGetPlayerMaxScore
     * @static
     * @param {RspGetPlayerMaxScore} message RspGetPlayerMaxScore
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RspGetPlayerMaxScore.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.itype = 0;
            object.score = 0;
        }
        if (message.itype != null && message.hasOwnProperty("itype"))
            object.itype = message.itype;
        if (message.score != null && message.hasOwnProperty("score"))
            object.score = message.score;
        return object;
    };

    /**
     * Converts this RspGetPlayerMaxScore to JSON.
     * @function toJSON
     * @memberof RspGetPlayerMaxScore
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RspGetPlayerMaxScore.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RspGetPlayerMaxScore;
})();

$root.ReqPlayerRankList = (function() {

    /**
     * Properties of a ReqPlayerRankList.
     * @exports IReqPlayerRankList
     * @interface IReqPlayerRankList
     * @property {number} itype ReqPlayerRankList itype
     * @property {number} beginRank ReqPlayerRankList beginRank
     * @property {number} len ReqPlayerRankList len
     */

    /**
     * Constructs a new ReqPlayerRankList.
     * @exports ReqPlayerRankList
     * @classdesc Represents a ReqPlayerRankList.
     * @implements IReqPlayerRankList
     * @constructor
     * @param {IReqPlayerRankList=} [properties] Properties to set
     */
    function ReqPlayerRankList(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ReqPlayerRankList itype.
     * @member {number} itype
     * @memberof ReqPlayerRankList
     * @instance
     */
    ReqPlayerRankList.prototype.itype = 0;

    /**
     * ReqPlayerRankList beginRank.
     * @member {number} beginRank
     * @memberof ReqPlayerRankList
     * @instance
     */
    ReqPlayerRankList.prototype.beginRank = 0;

    /**
     * ReqPlayerRankList len.
     * @member {number} len
     * @memberof ReqPlayerRankList
     * @instance
     */
    ReqPlayerRankList.prototype.len = 0;

    /**
     * Creates a new ReqPlayerRankList instance using the specified properties.
     * @function create
     * @memberof ReqPlayerRankList
     * @static
     * @param {IReqPlayerRankList=} [properties] Properties to set
     * @returns {ReqPlayerRankList} ReqPlayerRankList instance
     */
    ReqPlayerRankList.create = function create(properties) {
        return new ReqPlayerRankList(properties);
    };

    /**
     * Encodes the specified ReqPlayerRankList message. Does not implicitly {@link ReqPlayerRankList.verify|verify} messages.
     * @function encode
     * @memberof ReqPlayerRankList
     * @static
     * @param {IReqPlayerRankList} message ReqPlayerRankList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqPlayerRankList.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.itype);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.beginRank);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.len);
        return writer;
    };

    /**
     * Encodes the specified ReqPlayerRankList message, length delimited. Does not implicitly {@link ReqPlayerRankList.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqPlayerRankList
     * @static
     * @param {IReqPlayerRankList} message ReqPlayerRankList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqPlayerRankList.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReqPlayerRankList message from the specified reader or buffer.
     * @function decode
     * @memberof ReqPlayerRankList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqPlayerRankList} ReqPlayerRankList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqPlayerRankList.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqPlayerRankList();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.itype = reader.int32();
                break;
            case 2:
                message.beginRank = reader.int32();
                break;
            case 3:
                message.len = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("itype"))
            throw $util.ProtocolError("missing required 'itype'", { instance: message });
        if (!message.hasOwnProperty("beginRank"))
            throw $util.ProtocolError("missing required 'beginRank'", { instance: message });
        if (!message.hasOwnProperty("len"))
            throw $util.ProtocolError("missing required 'len'", { instance: message });
        return message;
    };

    /**
     * Decodes a ReqPlayerRankList message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqPlayerRankList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqPlayerRankList} ReqPlayerRankList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqPlayerRankList.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReqPlayerRankList message.
     * @function verify
     * @memberof ReqPlayerRankList
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqPlayerRankList.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.itype))
            return "itype: integer expected";
        if (!$util.isInteger(message.beginRank))
            return "beginRank: integer expected";
        if (!$util.isInteger(message.len))
            return "len: integer expected";
        return null;
    };

    /**
     * Creates a ReqPlayerRankList message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqPlayerRankList
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqPlayerRankList} ReqPlayerRankList
     */
    ReqPlayerRankList.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqPlayerRankList)
            return object;
        var message = new $root.ReqPlayerRankList();
        if (object.itype != null)
            message.itype = object.itype | 0;
        if (object.beginRank != null)
            message.beginRank = object.beginRank | 0;
        if (object.len != null)
            message.len = object.len | 0;
        return message;
    };

    /**
     * Creates a plain object from a ReqPlayerRankList message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqPlayerRankList
     * @static
     * @param {ReqPlayerRankList} message ReqPlayerRankList
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqPlayerRankList.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.itype = 0;
            object.beginRank = 0;
            object.len = 0;
        }
        if (message.itype != null && message.hasOwnProperty("itype"))
            object.itype = message.itype;
        if (message.beginRank != null && message.hasOwnProperty("beginRank"))
            object.beginRank = message.beginRank;
        if (message.len != null && message.hasOwnProperty("len"))
            object.len = message.len;
        return object;
    };

    /**
     * Converts this ReqPlayerRankList to JSON.
     * @function toJSON
     * @memberof ReqPlayerRankList
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqPlayerRankList.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ReqPlayerRankList;
})();

$root.RankEntry = (function() {

    /**
     * Properties of a RankEntry.
     * @exports IRankEntry
     * @interface IRankEntry
     * @property {number} uin RankEntry uin
     * @property {number} rank RankEntry rank
     * @property {number} score RankEntry score
     */

    /**
     * Constructs a new RankEntry.
     * @exports RankEntry
     * @classdesc Represents a RankEntry.
     * @implements IRankEntry
     * @constructor
     * @param {IRankEntry=} [properties] Properties to set
     */
    function RankEntry(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RankEntry uin.
     * @member {number} uin
     * @memberof RankEntry
     * @instance
     */
    RankEntry.prototype.uin = 0;

    /**
     * RankEntry rank.
     * @member {number} rank
     * @memberof RankEntry
     * @instance
     */
    RankEntry.prototype.rank = 0;

    /**
     * RankEntry score.
     * @member {number} score
     * @memberof RankEntry
     * @instance
     */
    RankEntry.prototype.score = 0;

    /**
     * Creates a new RankEntry instance using the specified properties.
     * @function create
     * @memberof RankEntry
     * @static
     * @param {IRankEntry=} [properties] Properties to set
     * @returns {RankEntry} RankEntry instance
     */
    RankEntry.create = function create(properties) {
        return new RankEntry(properties);
    };

    /**
     * Encodes the specified RankEntry message. Does not implicitly {@link RankEntry.verify|verify} messages.
     * @function encode
     * @memberof RankEntry
     * @static
     * @param {IRankEntry} message RankEntry message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RankEntry.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.uin);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.rank);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.score);
        return writer;
    };

    /**
     * Encodes the specified RankEntry message, length delimited. Does not implicitly {@link RankEntry.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RankEntry
     * @static
     * @param {IRankEntry} message RankEntry message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RankEntry.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RankEntry message from the specified reader or buffer.
     * @function decode
     * @memberof RankEntry
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RankEntry} RankEntry
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RankEntry.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RankEntry();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.uin = reader.int32();
                break;
            case 2:
                message.rank = reader.int32();
                break;
            case 3:
                message.score = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("uin"))
            throw $util.ProtocolError("missing required 'uin'", { instance: message });
        if (!message.hasOwnProperty("rank"))
            throw $util.ProtocolError("missing required 'rank'", { instance: message });
        if (!message.hasOwnProperty("score"))
            throw $util.ProtocolError("missing required 'score'", { instance: message });
        return message;
    };

    /**
     * Decodes a RankEntry message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RankEntry
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RankEntry} RankEntry
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RankEntry.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RankEntry message.
     * @function verify
     * @memberof RankEntry
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RankEntry.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.uin))
            return "uin: integer expected";
        if (!$util.isInteger(message.rank))
            return "rank: integer expected";
        if (!$util.isInteger(message.score))
            return "score: integer expected";
        return null;
    };

    /**
     * Creates a RankEntry message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RankEntry
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RankEntry} RankEntry
     */
    RankEntry.fromObject = function fromObject(object) {
        if (object instanceof $root.RankEntry)
            return object;
        var message = new $root.RankEntry();
        if (object.uin != null)
            message.uin = object.uin | 0;
        if (object.rank != null)
            message.rank = object.rank | 0;
        if (object.score != null)
            message.score = object.score | 0;
        return message;
    };

    /**
     * Creates a plain object from a RankEntry message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RankEntry
     * @static
     * @param {RankEntry} message RankEntry
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RankEntry.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.uin = 0;
            object.rank = 0;
            object.score = 0;
        }
        if (message.uin != null && message.hasOwnProperty("uin"))
            object.uin = message.uin;
        if (message.rank != null && message.hasOwnProperty("rank"))
            object.rank = message.rank;
        if (message.score != null && message.hasOwnProperty("score"))
            object.score = message.score;
        return object;
    };

    /**
     * Converts this RankEntry to JSON.
     * @function toJSON
     * @memberof RankEntry
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RankEntry.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RankEntry;
})();

$root.RspPlayerRankList = (function() {

    /**
     * Properties of a RspPlayerRankList.
     * @exports IRspPlayerRankList
     * @interface IRspPlayerRankList
     * @property {number} itype RspPlayerRankList itype
     * @property {IRankEntry} playerEntry RspPlayerRankList playerEntry
     * @property {Array.<IRankEntry>|null} [entryList] RspPlayerRankList entryList
     */

    /**
     * Constructs a new RspPlayerRankList.
     * @exports RspPlayerRankList
     * @classdesc Represents a RspPlayerRankList.
     * @implements IRspPlayerRankList
     * @constructor
     * @param {IRspPlayerRankList=} [properties] Properties to set
     */
    function RspPlayerRankList(properties) {
        this.entryList = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RspPlayerRankList itype.
     * @member {number} itype
     * @memberof RspPlayerRankList
     * @instance
     */
    RspPlayerRankList.prototype.itype = 0;

    /**
     * RspPlayerRankList playerEntry.
     * @member {IRankEntry} playerEntry
     * @memberof RspPlayerRankList
     * @instance
     */
    RspPlayerRankList.prototype.playerEntry = null;

    /**
     * RspPlayerRankList entryList.
     * @member {Array.<IRankEntry>} entryList
     * @memberof RspPlayerRankList
     * @instance
     */
    RspPlayerRankList.prototype.entryList = $util.emptyArray;

    /**
     * Creates a new RspPlayerRankList instance using the specified properties.
     * @function create
     * @memberof RspPlayerRankList
     * @static
     * @param {IRspPlayerRankList=} [properties] Properties to set
     * @returns {RspPlayerRankList} RspPlayerRankList instance
     */
    RspPlayerRankList.create = function create(properties) {
        return new RspPlayerRankList(properties);
    };

    /**
     * Encodes the specified RspPlayerRankList message. Does not implicitly {@link RspPlayerRankList.verify|verify} messages.
     * @function encode
     * @memberof RspPlayerRankList
     * @static
     * @param {IRspPlayerRankList} message RspPlayerRankList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RspPlayerRankList.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.itype);
        $root.RankEntry.encode(message.playerEntry, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.entryList != null && message.entryList.length)
            for (var i = 0; i < message.entryList.length; ++i)
                $root.RankEntry.encode(message.entryList[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified RspPlayerRankList message, length delimited. Does not implicitly {@link RspPlayerRankList.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RspPlayerRankList
     * @static
     * @param {IRspPlayerRankList} message RspPlayerRankList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RspPlayerRankList.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RspPlayerRankList message from the specified reader or buffer.
     * @function decode
     * @memberof RspPlayerRankList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RspPlayerRankList} RspPlayerRankList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RspPlayerRankList.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RspPlayerRankList();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.itype = reader.int32();
                break;
            case 2:
                message.playerEntry = $root.RankEntry.decode(reader, reader.uint32());
                break;
            case 3:
                if (!(message.entryList && message.entryList.length))
                    message.entryList = [];
                message.entryList.push($root.RankEntry.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("itype"))
            throw $util.ProtocolError("missing required 'itype'", { instance: message });
        if (!message.hasOwnProperty("playerEntry"))
            throw $util.ProtocolError("missing required 'playerEntry'", { instance: message });
        return message;
    };

    /**
     * Decodes a RspPlayerRankList message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RspPlayerRankList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RspPlayerRankList} RspPlayerRankList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RspPlayerRankList.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RspPlayerRankList message.
     * @function verify
     * @memberof RspPlayerRankList
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RspPlayerRankList.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.itype))
            return "itype: integer expected";
        {
            var error = $root.RankEntry.verify(message.playerEntry);
            if (error)
                return "playerEntry." + error;
        }
        if (message.entryList != null && message.hasOwnProperty("entryList")) {
            if (!Array.isArray(message.entryList))
                return "entryList: array expected";
            for (var i = 0; i < message.entryList.length; ++i) {
                var error = $root.RankEntry.verify(message.entryList[i]);
                if (error)
                    return "entryList." + error;
            }
        }
        return null;
    };

    /**
     * Creates a RspPlayerRankList message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RspPlayerRankList
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RspPlayerRankList} RspPlayerRankList
     */
    RspPlayerRankList.fromObject = function fromObject(object) {
        if (object instanceof $root.RspPlayerRankList)
            return object;
        var message = new $root.RspPlayerRankList();
        if (object.itype != null)
            message.itype = object.itype | 0;
        if (object.playerEntry != null) {
            if (typeof object.playerEntry !== "object")
                throw TypeError(".RspPlayerRankList.playerEntry: object expected");
            message.playerEntry = $root.RankEntry.fromObject(object.playerEntry);
        }
        if (object.entryList) {
            if (!Array.isArray(object.entryList))
                throw TypeError(".RspPlayerRankList.entryList: array expected");
            message.entryList = [];
            for (var i = 0; i < object.entryList.length; ++i) {
                if (typeof object.entryList[i] !== "object")
                    throw TypeError(".RspPlayerRankList.entryList: object expected");
                message.entryList[i] = $root.RankEntry.fromObject(object.entryList[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a RspPlayerRankList message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RspPlayerRankList
     * @static
     * @param {RspPlayerRankList} message RspPlayerRankList
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RspPlayerRankList.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.entryList = [];
        if (options.defaults) {
            object.itype = 0;
            object.playerEntry = null;
        }
        if (message.itype != null && message.hasOwnProperty("itype"))
            object.itype = message.itype;
        if (message.playerEntry != null && message.hasOwnProperty("playerEntry"))
            object.playerEntry = $root.RankEntry.toObject(message.playerEntry, options);
        if (message.entryList && message.entryList.length) {
            object.entryList = [];
            for (var j = 0; j < message.entryList.length; ++j)
                object.entryList[j] = $root.RankEntry.toObject(message.entryList[j], options);
        }
        return object;
    };

    /**
     * Converts this RspPlayerRankList to JSON.
     * @function toJSON
     * @memberof RspPlayerRankList
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RspPlayerRankList.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RspPlayerRankList;
})();

$root.ReqGetPlayerNearbyRank = (function() {

    /**
     * Properties of a ReqGetPlayerNearbyRank.
     * @exports IReqGetPlayerNearbyRank
     * @interface IReqGetPlayerNearbyRank
     * @property {number} itype ReqGetPlayerNearbyRank itype
     */

    /**
     * Constructs a new ReqGetPlayerNearbyRank.
     * @exports ReqGetPlayerNearbyRank
     * @classdesc Represents a ReqGetPlayerNearbyRank.
     * @implements IReqGetPlayerNearbyRank
     * @constructor
     * @param {IReqGetPlayerNearbyRank=} [properties] Properties to set
     */
    function ReqGetPlayerNearbyRank(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ReqGetPlayerNearbyRank itype.
     * @member {number} itype
     * @memberof ReqGetPlayerNearbyRank
     * @instance
     */
    ReqGetPlayerNearbyRank.prototype.itype = 0;

    /**
     * Creates a new ReqGetPlayerNearbyRank instance using the specified properties.
     * @function create
     * @memberof ReqGetPlayerNearbyRank
     * @static
     * @param {IReqGetPlayerNearbyRank=} [properties] Properties to set
     * @returns {ReqGetPlayerNearbyRank} ReqGetPlayerNearbyRank instance
     */
    ReqGetPlayerNearbyRank.create = function create(properties) {
        return new ReqGetPlayerNearbyRank(properties);
    };

    /**
     * Encodes the specified ReqGetPlayerNearbyRank message. Does not implicitly {@link ReqGetPlayerNearbyRank.verify|verify} messages.
     * @function encode
     * @memberof ReqGetPlayerNearbyRank
     * @static
     * @param {IReqGetPlayerNearbyRank} message ReqGetPlayerNearbyRank message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqGetPlayerNearbyRank.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.itype);
        return writer;
    };

    /**
     * Encodes the specified ReqGetPlayerNearbyRank message, length delimited. Does not implicitly {@link ReqGetPlayerNearbyRank.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqGetPlayerNearbyRank
     * @static
     * @param {IReqGetPlayerNearbyRank} message ReqGetPlayerNearbyRank message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqGetPlayerNearbyRank.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReqGetPlayerNearbyRank message from the specified reader or buffer.
     * @function decode
     * @memberof ReqGetPlayerNearbyRank
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqGetPlayerNearbyRank} ReqGetPlayerNearbyRank
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqGetPlayerNearbyRank.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqGetPlayerNearbyRank();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.itype = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("itype"))
            throw $util.ProtocolError("missing required 'itype'", { instance: message });
        return message;
    };

    /**
     * Decodes a ReqGetPlayerNearbyRank message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqGetPlayerNearbyRank
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqGetPlayerNearbyRank} ReqGetPlayerNearbyRank
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqGetPlayerNearbyRank.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReqGetPlayerNearbyRank message.
     * @function verify
     * @memberof ReqGetPlayerNearbyRank
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqGetPlayerNearbyRank.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.itype))
            return "itype: integer expected";
        return null;
    };

    /**
     * Creates a ReqGetPlayerNearbyRank message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqGetPlayerNearbyRank
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqGetPlayerNearbyRank} ReqGetPlayerNearbyRank
     */
    ReqGetPlayerNearbyRank.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqGetPlayerNearbyRank)
            return object;
        var message = new $root.ReqGetPlayerNearbyRank();
        if (object.itype != null)
            message.itype = object.itype | 0;
        return message;
    };

    /**
     * Creates a plain object from a ReqGetPlayerNearbyRank message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqGetPlayerNearbyRank
     * @static
     * @param {ReqGetPlayerNearbyRank} message ReqGetPlayerNearbyRank
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqGetPlayerNearbyRank.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.itype = 0;
        if (message.itype != null && message.hasOwnProperty("itype"))
            object.itype = message.itype;
        return object;
    };

    /**
     * Converts this ReqGetPlayerNearbyRank to JSON.
     * @function toJSON
     * @memberof ReqGetPlayerNearbyRank
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqGetPlayerNearbyRank.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ReqGetPlayerNearbyRank;
})();

$root.ReqPlayerAction = (function() {

    /**
     * Properties of a ReqPlayerAction.
     * @exports IReqPlayerAction
     * @interface IReqPlayerAction
     * @property {number} action ReqPlayerAction action
     */

    /**
     * Constructs a new ReqPlayerAction.
     * @exports ReqPlayerAction
     * @classdesc Represents a ReqPlayerAction.
     * @implements IReqPlayerAction
     * @constructor
     * @param {IReqPlayerAction=} [properties] Properties to set
     */
    function ReqPlayerAction(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ReqPlayerAction action.
     * @member {number} action
     * @memberof ReqPlayerAction
     * @instance
     */
    ReqPlayerAction.prototype.action = 0;

    /**
     * Creates a new ReqPlayerAction instance using the specified properties.
     * @function create
     * @memberof ReqPlayerAction
     * @static
     * @param {IReqPlayerAction=} [properties] Properties to set
     * @returns {ReqPlayerAction} ReqPlayerAction instance
     */
    ReqPlayerAction.create = function create(properties) {
        return new ReqPlayerAction(properties);
    };

    /**
     * Encodes the specified ReqPlayerAction message. Does not implicitly {@link ReqPlayerAction.verify|verify} messages.
     * @function encode
     * @memberof ReqPlayerAction
     * @static
     * @param {IReqPlayerAction} message ReqPlayerAction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqPlayerAction.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.action);
        return writer;
    };

    /**
     * Encodes the specified ReqPlayerAction message, length delimited. Does not implicitly {@link ReqPlayerAction.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqPlayerAction
     * @static
     * @param {IReqPlayerAction} message ReqPlayerAction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqPlayerAction.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReqPlayerAction message from the specified reader or buffer.
     * @function decode
     * @memberof ReqPlayerAction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqPlayerAction} ReqPlayerAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqPlayerAction.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqPlayerAction();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.action = reader.int32();
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
     * Decodes a ReqPlayerAction message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqPlayerAction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqPlayerAction} ReqPlayerAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqPlayerAction.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReqPlayerAction message.
     * @function verify
     * @memberof ReqPlayerAction
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqPlayerAction.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.action))
            return "action: integer expected";
        return null;
    };

    /**
     * Creates a ReqPlayerAction message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqPlayerAction
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqPlayerAction} ReqPlayerAction
     */
    ReqPlayerAction.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqPlayerAction)
            return object;
        var message = new $root.ReqPlayerAction();
        if (object.action != null)
            message.action = object.action | 0;
        return message;
    };

    /**
     * Creates a plain object from a ReqPlayerAction message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqPlayerAction
     * @static
     * @param {ReqPlayerAction} message ReqPlayerAction
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqPlayerAction.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.action = 0;
        if (message.action != null && message.hasOwnProperty("action"))
            object.action = message.action;
        return object;
    };

    /**
     * Converts this ReqPlayerAction to JSON.
     * @function toJSON
     * @memberof ReqPlayerAction
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqPlayerAction.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ReqPlayerAction;
})();

$root.InfPlayerAction = (function() {

    /**
     * Properties of an InfPlayerAction.
     * @exports IInfPlayerAction
     * @interface IInfPlayerAction
     * @property {number} uin InfPlayerAction uin
     * @property {number} action InfPlayerAction action
     */

    /**
     * Constructs a new InfPlayerAction.
     * @exports InfPlayerAction
     * @classdesc Represents an InfPlayerAction.
     * @implements IInfPlayerAction
     * @constructor
     * @param {IInfPlayerAction=} [properties] Properties to set
     */
    function InfPlayerAction(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * InfPlayerAction uin.
     * @member {number} uin
     * @memberof InfPlayerAction
     * @instance
     */
    InfPlayerAction.prototype.uin = 0;

    /**
     * InfPlayerAction action.
     * @member {number} action
     * @memberof InfPlayerAction
     * @instance
     */
    InfPlayerAction.prototype.action = 0;

    /**
     * Creates a new InfPlayerAction instance using the specified properties.
     * @function create
     * @memberof InfPlayerAction
     * @static
     * @param {IInfPlayerAction=} [properties] Properties to set
     * @returns {InfPlayerAction} InfPlayerAction instance
     */
    InfPlayerAction.create = function create(properties) {
        return new InfPlayerAction(properties);
    };

    /**
     * Encodes the specified InfPlayerAction message. Does not implicitly {@link InfPlayerAction.verify|verify} messages.
     * @function encode
     * @memberof InfPlayerAction
     * @static
     * @param {IInfPlayerAction} message InfPlayerAction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    InfPlayerAction.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.uin);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.action);
        return writer;
    };

    /**
     * Encodes the specified InfPlayerAction message, length delimited. Does not implicitly {@link InfPlayerAction.verify|verify} messages.
     * @function encodeDelimited
     * @memberof InfPlayerAction
     * @static
     * @param {IInfPlayerAction} message InfPlayerAction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    InfPlayerAction.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an InfPlayerAction message from the specified reader or buffer.
     * @function decode
     * @memberof InfPlayerAction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {InfPlayerAction} InfPlayerAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    InfPlayerAction.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.InfPlayerAction();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.uin = reader.int32();
                break;
            case 2:
                message.action = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("uin"))
            throw $util.ProtocolError("missing required 'uin'", { instance: message });
        if (!message.hasOwnProperty("action"))
            throw $util.ProtocolError("missing required 'action'", { instance: message });
        return message;
    };

    /**
     * Decodes an InfPlayerAction message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof InfPlayerAction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {InfPlayerAction} InfPlayerAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    InfPlayerAction.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an InfPlayerAction message.
     * @function verify
     * @memberof InfPlayerAction
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    InfPlayerAction.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.uin))
            return "uin: integer expected";
        if (!$util.isInteger(message.action))
            return "action: integer expected";
        return null;
    };

    /**
     * Creates an InfPlayerAction message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof InfPlayerAction
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {InfPlayerAction} InfPlayerAction
     */
    InfPlayerAction.fromObject = function fromObject(object) {
        if (object instanceof $root.InfPlayerAction)
            return object;
        var message = new $root.InfPlayerAction();
        if (object.uin != null)
            message.uin = object.uin | 0;
        if (object.action != null)
            message.action = object.action | 0;
        return message;
    };

    /**
     * Creates a plain object from an InfPlayerAction message. Also converts values to other types if specified.
     * @function toObject
     * @memberof InfPlayerAction
     * @static
     * @param {InfPlayerAction} message InfPlayerAction
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    InfPlayerAction.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.uin = 0;
            object.action = 0;
        }
        if (message.uin != null && message.hasOwnProperty("uin"))
            object.uin = message.uin;
        if (message.action != null && message.hasOwnProperty("action"))
            object.action = message.action;
        return object;
    };

    /**
     * Converts this InfPlayerAction to JSON.
     * @function toJSON
     * @memberof InfPlayerAction
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    InfPlayerAction.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return InfPlayerAction;
})();

$root.ReqUpdatePlayerMaxScore = (function() {

    /**
     * Properties of a ReqUpdatePlayerMaxScore.
     * @exports IReqUpdatePlayerMaxScore
     * @interface IReqUpdatePlayerMaxScore
     * @property {number} itype ReqUpdatePlayerMaxScore itype
     * @property {number} score ReqUpdatePlayerMaxScore score
     */

    /**
     * Constructs a new ReqUpdatePlayerMaxScore.
     * @exports ReqUpdatePlayerMaxScore
     * @classdesc Represents a ReqUpdatePlayerMaxScore.
     * @implements IReqUpdatePlayerMaxScore
     * @constructor
     * @param {IReqUpdatePlayerMaxScore=} [properties] Properties to set
     */
    function ReqUpdatePlayerMaxScore(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ReqUpdatePlayerMaxScore itype.
     * @member {number} itype
     * @memberof ReqUpdatePlayerMaxScore
     * @instance
     */
    ReqUpdatePlayerMaxScore.prototype.itype = 0;

    /**
     * ReqUpdatePlayerMaxScore score.
     * @member {number} score
     * @memberof ReqUpdatePlayerMaxScore
     * @instance
     */
    ReqUpdatePlayerMaxScore.prototype.score = 0;

    /**
     * Creates a new ReqUpdatePlayerMaxScore instance using the specified properties.
     * @function create
     * @memberof ReqUpdatePlayerMaxScore
     * @static
     * @param {IReqUpdatePlayerMaxScore=} [properties] Properties to set
     * @returns {ReqUpdatePlayerMaxScore} ReqUpdatePlayerMaxScore instance
     */
    ReqUpdatePlayerMaxScore.create = function create(properties) {
        return new ReqUpdatePlayerMaxScore(properties);
    };

    /**
     * Encodes the specified ReqUpdatePlayerMaxScore message. Does not implicitly {@link ReqUpdatePlayerMaxScore.verify|verify} messages.
     * @function encode
     * @memberof ReqUpdatePlayerMaxScore
     * @static
     * @param {IReqUpdatePlayerMaxScore} message ReqUpdatePlayerMaxScore message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqUpdatePlayerMaxScore.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.itype);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.score);
        return writer;
    };

    /**
     * Encodes the specified ReqUpdatePlayerMaxScore message, length delimited. Does not implicitly {@link ReqUpdatePlayerMaxScore.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqUpdatePlayerMaxScore
     * @static
     * @param {IReqUpdatePlayerMaxScore} message ReqUpdatePlayerMaxScore message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqUpdatePlayerMaxScore.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReqUpdatePlayerMaxScore message from the specified reader or buffer.
     * @function decode
     * @memberof ReqUpdatePlayerMaxScore
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqUpdatePlayerMaxScore} ReqUpdatePlayerMaxScore
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqUpdatePlayerMaxScore.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqUpdatePlayerMaxScore();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.itype = reader.int32();
                break;
            case 2:
                message.score = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("itype"))
            throw $util.ProtocolError("missing required 'itype'", { instance: message });
        if (!message.hasOwnProperty("score"))
            throw $util.ProtocolError("missing required 'score'", { instance: message });
        return message;
    };

    /**
     * Decodes a ReqUpdatePlayerMaxScore message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqUpdatePlayerMaxScore
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqUpdatePlayerMaxScore} ReqUpdatePlayerMaxScore
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqUpdatePlayerMaxScore.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReqUpdatePlayerMaxScore message.
     * @function verify
     * @memberof ReqUpdatePlayerMaxScore
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqUpdatePlayerMaxScore.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.itype))
            return "itype: integer expected";
        if (!$util.isInteger(message.score))
            return "score: integer expected";
        return null;
    };

    /**
     * Creates a ReqUpdatePlayerMaxScore message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqUpdatePlayerMaxScore
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqUpdatePlayerMaxScore} ReqUpdatePlayerMaxScore
     */
    ReqUpdatePlayerMaxScore.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqUpdatePlayerMaxScore)
            return object;
        var message = new $root.ReqUpdatePlayerMaxScore();
        if (object.itype != null)
            message.itype = object.itype | 0;
        if (object.score != null)
            message.score = object.score | 0;
        return message;
    };

    /**
     * Creates a plain object from a ReqUpdatePlayerMaxScore message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqUpdatePlayerMaxScore
     * @static
     * @param {ReqUpdatePlayerMaxScore} message ReqUpdatePlayerMaxScore
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqUpdatePlayerMaxScore.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.itype = 0;
            object.score = 0;
        }
        if (message.itype != null && message.hasOwnProperty("itype"))
            object.itype = message.itype;
        if (message.score != null && message.hasOwnProperty("score"))
            object.score = message.score;
        return object;
    };

    /**
     * Converts this ReqUpdatePlayerMaxScore to JSON.
     * @function toJSON
     * @memberof ReqUpdatePlayerMaxScore
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqUpdatePlayerMaxScore.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ReqUpdatePlayerMaxScore;
})();

module.exports = $root;
