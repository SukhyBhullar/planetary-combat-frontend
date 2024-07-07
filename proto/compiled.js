/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.awesomepackage = (function() {

    /**
     * Namespace awesomepackage.
     * @exports awesomepackage
     * @namespace
     */
    var awesomepackage = {};

    awesomepackage.Game = (function() {

        /**
         * Properties of a Game.
         * @memberof awesomepackage
         * @interface IGame
         * @property {string|null} [id] Game id
         * @property {string|null} [charname] Game charname
         * @property {string|null} [seed] Game seed
         */

        /**
         * Constructs a new Game.
         * @memberof awesomepackage
         * @classdesc Represents a Game.
         * @implements IGame
         * @constructor
         * @param {awesomepackage.IGame=} [properties] Properties to set
         */
        function Game(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Game id.
         * @member {string} id
         * @memberof awesomepackage.Game
         * @instance
         */
        Game.prototype.id = "";

        /**
         * Game charname.
         * @member {string} charname
         * @memberof awesomepackage.Game
         * @instance
         */
        Game.prototype.charname = "";

        /**
         * Game seed.
         * @member {string} seed
         * @memberof awesomepackage.Game
         * @instance
         */
        Game.prototype.seed = "";

        /**
         * Creates a new Game instance using the specified properties.
         * @function create
         * @memberof awesomepackage.Game
         * @static
         * @param {awesomepackage.IGame=} [properties] Properties to set
         * @returns {awesomepackage.Game} Game instance
         */
        Game.create = function create(properties) {
            return new Game(properties);
        };

        /**
         * Encodes the specified Game message. Does not implicitly {@link awesomepackage.Game.verify|verify} messages.
         * @function encode
         * @memberof awesomepackage.Game
         * @static
         * @param {awesomepackage.IGame} message Game message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Game.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.charname != null && Object.hasOwnProperty.call(message, "charname"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.charname);
            if (message.seed != null && Object.hasOwnProperty.call(message, "seed"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.seed);
            return writer;
        };

        /**
         * Encodes the specified Game message, length delimited. Does not implicitly {@link awesomepackage.Game.verify|verify} messages.
         * @function encodeDelimited
         * @memberof awesomepackage.Game
         * @static
         * @param {awesomepackage.IGame} message Game message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Game.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Game message from the specified reader or buffer.
         * @function decode
         * @memberof awesomepackage.Game
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {awesomepackage.Game} Game
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Game.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.awesomepackage.Game();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.charname = reader.string();
                        break;
                    }
                case 3: {
                        message.seed = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Game message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof awesomepackage.Game
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {awesomepackage.Game} Game
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Game.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Game message.
         * @function verify
         * @memberof awesomepackage.Game
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Game.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.charname != null && message.hasOwnProperty("charname"))
                if (!$util.isString(message.charname))
                    return "charname: string expected";
            if (message.seed != null && message.hasOwnProperty("seed"))
                if (!$util.isString(message.seed))
                    return "seed: string expected";
            return null;
        };

        /**
         * Creates a Game message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof awesomepackage.Game
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {awesomepackage.Game} Game
         */
        Game.fromObject = function fromObject(object) {
            if (object instanceof $root.awesomepackage.Game)
                return object;
            var message = new $root.awesomepackage.Game();
            if (object.id != null)
                message.id = String(object.id);
            if (object.charname != null)
                message.charname = String(object.charname);
            if (object.seed != null)
                message.seed = String(object.seed);
            return message;
        };

        /**
         * Creates a plain object from a Game message. Also converts values to other types if specified.
         * @function toObject
         * @memberof awesomepackage.Game
         * @static
         * @param {awesomepackage.Game} message Game
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Game.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.charname = "";
                object.seed = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.charname != null && message.hasOwnProperty("charname"))
                object.charname = message.charname;
            if (message.seed != null && message.hasOwnProperty("seed"))
                object.seed = message.seed;
            return object;
        };

        /**
         * Converts this Game to JSON.
         * @function toJSON
         * @memberof awesomepackage.Game
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Game.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Game
         * @function getTypeUrl
         * @memberof awesomepackage.Game
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Game.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/awesomepackage.Game";
        };

        return Game;
    })();

    return awesomepackage;
})();

module.exports = $root;
