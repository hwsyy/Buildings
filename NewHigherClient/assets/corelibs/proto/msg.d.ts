import * as $protobuf from "protobufjs";

/** Properties of a ReqPlayerLogin. */
export interface IReqPlayerLogin {
}

/** Represents a ReqPlayerLogin. */
export class ReqPlayerLogin implements IReqPlayerLogin {

    /**
     * Constructs a new ReqPlayerLogin.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqPlayerLogin);

    /**
     * Creates a new ReqPlayerLogin instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqPlayerLogin instance
     */
    public static create(properties?: IReqPlayerLogin): ReqPlayerLogin;

    /**
     * Encodes the specified ReqPlayerLogin message. Does not implicitly {@link ReqPlayerLogin.verify|verify} messages.
     * @param message ReqPlayerLogin message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqPlayerLogin, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqPlayerLogin message, length delimited. Does not implicitly {@link ReqPlayerLogin.verify|verify} messages.
     * @param message ReqPlayerLogin message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqPlayerLogin, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqPlayerLogin message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqPlayerLogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqPlayerLogin;

    /**
     * Decodes a ReqPlayerLogin message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqPlayerLogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqPlayerLogin;

    /**
     * Verifies a ReqPlayerLogin message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqPlayerLogin message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqPlayerLogin
     */
    public static fromObject(object: { [k: string]: any }): ReqPlayerLogin;

    /**
     * Creates a plain object from a ReqPlayerLogin message. Also converts values to other types if specified.
     * @param message ReqPlayerLogin
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqPlayerLogin, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqPlayerLogin to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RspPlayerLogin. */
export interface IRspPlayerLogin {

    /** RspPlayerLogin resultID */
    resultID: number;

    /** RspPlayerLogin uin */
    uin: number;
}

/** Represents a RspPlayerLogin. */
export class RspPlayerLogin implements IRspPlayerLogin {

    /**
     * Constructs a new RspPlayerLogin.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRspPlayerLogin);

    /** RspPlayerLogin resultID. */
    public resultID: number;

    /** RspPlayerLogin uin. */
    public uin: number;

    /**
     * Creates a new RspPlayerLogin instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RspPlayerLogin instance
     */
    public static create(properties?: IRspPlayerLogin): RspPlayerLogin;

    /**
     * Encodes the specified RspPlayerLogin message. Does not implicitly {@link RspPlayerLogin.verify|verify} messages.
     * @param message RspPlayerLogin message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRspPlayerLogin, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RspPlayerLogin message, length delimited. Does not implicitly {@link RspPlayerLogin.verify|verify} messages.
     * @param message RspPlayerLogin message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRspPlayerLogin, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RspPlayerLogin message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RspPlayerLogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RspPlayerLogin;

    /**
     * Decodes a RspPlayerLogin message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RspPlayerLogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RspPlayerLogin;

    /**
     * Verifies a RspPlayerLogin message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RspPlayerLogin message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RspPlayerLogin
     */
    public static fromObject(object: { [k: string]: any }): RspPlayerLogin;

    /**
     * Creates a plain object from a RspPlayerLogin message. Also converts values to other types if specified.
     * @param message RspPlayerLogin
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RspPlayerLogin, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RspPlayerLogin to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RspPlayerNotLogin. */
export interface IRspPlayerNotLogin {
}

/** Represents a RspPlayerNotLogin. */
export class RspPlayerNotLogin implements IRspPlayerNotLogin {

    /**
     * Constructs a new RspPlayerNotLogin.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRspPlayerNotLogin);

    /**
     * Creates a new RspPlayerNotLogin instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RspPlayerNotLogin instance
     */
    public static create(properties?: IRspPlayerNotLogin): RspPlayerNotLogin;

    /**
     * Encodes the specified RspPlayerNotLogin message. Does not implicitly {@link RspPlayerNotLogin.verify|verify} messages.
     * @param message RspPlayerNotLogin message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRspPlayerNotLogin, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RspPlayerNotLogin message, length delimited. Does not implicitly {@link RspPlayerNotLogin.verify|verify} messages.
     * @param message RspPlayerNotLogin message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRspPlayerNotLogin, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RspPlayerNotLogin message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RspPlayerNotLogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RspPlayerNotLogin;

    /**
     * Decodes a RspPlayerNotLogin message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RspPlayerNotLogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RspPlayerNotLogin;

    /**
     * Verifies a RspPlayerNotLogin message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RspPlayerNotLogin message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RspPlayerNotLogin
     */
    public static fromObject(object: { [k: string]: any }): RspPlayerNotLogin;

    /**
     * Creates a plain object from a RspPlayerNotLogin message. Also converts values to other types if specified.
     * @param message RspPlayerNotLogin
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RspPlayerNotLogin, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RspPlayerNotLogin to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ReqPlayerCreateTeam. */
export interface IReqPlayerCreateTeam {

    /** ReqPlayerCreateTeam teamSize */
    teamSize: number;
}

/** Represents a ReqPlayerCreateTeam. */
export class ReqPlayerCreateTeam implements IReqPlayerCreateTeam {

    /**
     * Constructs a new ReqPlayerCreateTeam.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqPlayerCreateTeam);

    /** ReqPlayerCreateTeam teamSize. */
    public teamSize: number;

    /**
     * Creates a new ReqPlayerCreateTeam instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqPlayerCreateTeam instance
     */
    public static create(properties?: IReqPlayerCreateTeam): ReqPlayerCreateTeam;

    /**
     * Encodes the specified ReqPlayerCreateTeam message. Does not implicitly {@link ReqPlayerCreateTeam.verify|verify} messages.
     * @param message ReqPlayerCreateTeam message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqPlayerCreateTeam, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqPlayerCreateTeam message, length delimited. Does not implicitly {@link ReqPlayerCreateTeam.verify|verify} messages.
     * @param message ReqPlayerCreateTeam message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqPlayerCreateTeam, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqPlayerCreateTeam message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqPlayerCreateTeam
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqPlayerCreateTeam;

    /**
     * Decodes a ReqPlayerCreateTeam message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqPlayerCreateTeam
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqPlayerCreateTeam;

    /**
     * Verifies a ReqPlayerCreateTeam message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqPlayerCreateTeam message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqPlayerCreateTeam
     */
    public static fromObject(object: { [k: string]: any }): ReqPlayerCreateTeam;

    /**
     * Creates a plain object from a ReqPlayerCreateTeam message. Also converts values to other types if specified.
     * @param message ReqPlayerCreateTeam
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqPlayerCreateTeam, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqPlayerCreateTeam to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ReqPlayerJoinTeam. */
export interface IReqPlayerJoinTeam {

    /** ReqPlayerJoinTeam teamID */
    teamID: number;
}

/** Represents a ReqPlayerJoinTeam. */
export class ReqPlayerJoinTeam implements IReqPlayerJoinTeam {

    /**
     * Constructs a new ReqPlayerJoinTeam.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqPlayerJoinTeam);

    /** ReqPlayerJoinTeam teamID. */
    public teamID: number;

    /**
     * Creates a new ReqPlayerJoinTeam instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqPlayerJoinTeam instance
     */
    public static create(properties?: IReqPlayerJoinTeam): ReqPlayerJoinTeam;

    /**
     * Encodes the specified ReqPlayerJoinTeam message. Does not implicitly {@link ReqPlayerJoinTeam.verify|verify} messages.
     * @param message ReqPlayerJoinTeam message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqPlayerJoinTeam, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqPlayerJoinTeam message, length delimited. Does not implicitly {@link ReqPlayerJoinTeam.verify|verify} messages.
     * @param message ReqPlayerJoinTeam message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqPlayerJoinTeam, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqPlayerJoinTeam message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqPlayerJoinTeam
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqPlayerJoinTeam;

    /**
     * Decodes a ReqPlayerJoinTeam message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqPlayerJoinTeam
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqPlayerJoinTeam;

    /**
     * Verifies a ReqPlayerJoinTeam message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqPlayerJoinTeam message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqPlayerJoinTeam
     */
    public static fromObject(object: { [k: string]: any }): ReqPlayerJoinTeam;

    /**
     * Creates a plain object from a ReqPlayerJoinTeam message. Also converts values to other types if specified.
     * @param message ReqPlayerJoinTeam
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqPlayerJoinTeam, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqPlayerJoinTeam to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ReqPlayerLeaveTeam. */
export interface IReqPlayerLeaveTeam {

    /** ReqPlayerLeaveTeam teamID */
    teamID: number;
}

/** Represents a ReqPlayerLeaveTeam. */
export class ReqPlayerLeaveTeam implements IReqPlayerLeaveTeam {

    /**
     * Constructs a new ReqPlayerLeaveTeam.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqPlayerLeaveTeam);

    /** ReqPlayerLeaveTeam teamID. */
    public teamID: number;

    /**
     * Creates a new ReqPlayerLeaveTeam instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqPlayerLeaveTeam instance
     */
    public static create(properties?: IReqPlayerLeaveTeam): ReqPlayerLeaveTeam;

    /**
     * Encodes the specified ReqPlayerLeaveTeam message. Does not implicitly {@link ReqPlayerLeaveTeam.verify|verify} messages.
     * @param message ReqPlayerLeaveTeam message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqPlayerLeaveTeam, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqPlayerLeaveTeam message, length delimited. Does not implicitly {@link ReqPlayerLeaveTeam.verify|verify} messages.
     * @param message ReqPlayerLeaveTeam message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqPlayerLeaveTeam, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqPlayerLeaveTeam message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqPlayerLeaveTeam
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqPlayerLeaveTeam;

    /**
     * Decodes a ReqPlayerLeaveTeam message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqPlayerLeaveTeam
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqPlayerLeaveTeam;

    /**
     * Verifies a ReqPlayerLeaveTeam message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqPlayerLeaveTeam message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqPlayerLeaveTeam
     */
    public static fromObject(object: { [k: string]: any }): ReqPlayerLeaveTeam;

    /**
     * Creates a plain object from a ReqPlayerLeaveTeam message. Also converts values to other types if specified.
     * @param message ReqPlayerLeaveTeam
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqPlayerLeaveTeam, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqPlayerLeaveTeam to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ReqPlayerChangeSeat. */
export interface IReqPlayerChangeSeat {

    /** ReqPlayerChangeSeat targetSeat */
    targetSeat: number;
}

/** Represents a ReqPlayerChangeSeat. */
export class ReqPlayerChangeSeat implements IReqPlayerChangeSeat {

    /**
     * Constructs a new ReqPlayerChangeSeat.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqPlayerChangeSeat);

    /** ReqPlayerChangeSeat targetSeat. */
    public targetSeat: number;

    /**
     * Creates a new ReqPlayerChangeSeat instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqPlayerChangeSeat instance
     */
    public static create(properties?: IReqPlayerChangeSeat): ReqPlayerChangeSeat;

    /**
     * Encodes the specified ReqPlayerChangeSeat message. Does not implicitly {@link ReqPlayerChangeSeat.verify|verify} messages.
     * @param message ReqPlayerChangeSeat message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqPlayerChangeSeat, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqPlayerChangeSeat message, length delimited. Does not implicitly {@link ReqPlayerChangeSeat.verify|verify} messages.
     * @param message ReqPlayerChangeSeat message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqPlayerChangeSeat, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqPlayerChangeSeat message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqPlayerChangeSeat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqPlayerChangeSeat;

    /**
     * Decodes a ReqPlayerChangeSeat message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqPlayerChangeSeat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqPlayerChangeSeat;

    /**
     * Verifies a ReqPlayerChangeSeat message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqPlayerChangeSeat message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqPlayerChangeSeat
     */
    public static fromObject(object: { [k: string]: any }): ReqPlayerChangeSeat;

    /**
     * Creates a plain object from a ReqPlayerChangeSeat message. Also converts values to other types if specified.
     * @param message ReqPlayerChangeSeat
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqPlayerChangeSeat, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqPlayerChangeSeat to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ReqRemovePlayer. */
export interface IReqRemovePlayer {

    /** ReqRemovePlayer targetSeat */
    targetSeat: number;
}

/** Represents a ReqRemovePlayer. */
export class ReqRemovePlayer implements IReqRemovePlayer {

    /**
     * Constructs a new ReqRemovePlayer.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqRemovePlayer);

    /** ReqRemovePlayer targetSeat. */
    public targetSeat: number;

    /**
     * Creates a new ReqRemovePlayer instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqRemovePlayer instance
     */
    public static create(properties?: IReqRemovePlayer): ReqRemovePlayer;

    /**
     * Encodes the specified ReqRemovePlayer message. Does not implicitly {@link ReqRemovePlayer.verify|verify} messages.
     * @param message ReqRemovePlayer message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqRemovePlayer, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqRemovePlayer message, length delimited. Does not implicitly {@link ReqRemovePlayer.verify|verify} messages.
     * @param message ReqRemovePlayer message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqRemovePlayer, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqRemovePlayer message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqRemovePlayer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqRemovePlayer;

    /**
     * Decodes a ReqRemovePlayer message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqRemovePlayer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqRemovePlayer;

    /**
     * Verifies a ReqRemovePlayer message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqRemovePlayer message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqRemovePlayer
     */
    public static fromObject(object: { [k: string]: any }): ReqRemovePlayer;

    /**
     * Creates a plain object from a ReqRemovePlayer message. Also converts values to other types if specified.
     * @param message ReqRemovePlayer
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqRemovePlayer, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqRemovePlayer to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ReqPlayerReady. */
export interface IReqPlayerReady {

    /** ReqPlayerReady operation */
    operation: number;
}

/** Represents a ReqPlayerReady. */
export class ReqPlayerReady implements IReqPlayerReady {

    /**
     * Constructs a new ReqPlayerReady.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqPlayerReady);

    /** ReqPlayerReady operation. */
    public operation: number;

    /**
     * Creates a new ReqPlayerReady instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqPlayerReady instance
     */
    public static create(properties?: IReqPlayerReady): ReqPlayerReady;

    /**
     * Encodes the specified ReqPlayerReady message. Does not implicitly {@link ReqPlayerReady.verify|verify} messages.
     * @param message ReqPlayerReady message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqPlayerReady, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqPlayerReady message, length delimited. Does not implicitly {@link ReqPlayerReady.verify|verify} messages.
     * @param message ReqPlayerReady message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqPlayerReady, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqPlayerReady message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqPlayerReady
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqPlayerReady;

    /**
     * Decodes a ReqPlayerReady message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqPlayerReady
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqPlayerReady;

    /**
     * Verifies a ReqPlayerReady message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqPlayerReady message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqPlayerReady
     */
    public static fromObject(object: { [k: string]: any }): ReqPlayerReady;

    /**
     * Creates a plain object from a ReqPlayerReady message. Also converts values to other types if specified.
     * @param message ReqPlayerReady
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqPlayerReady, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqPlayerReady to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RspPlayerTeamAction. */
export interface IRspPlayerTeamAction {

    /** RspPlayerTeamAction resultID */
    resultID: number;

    /** RspPlayerTeamAction teamID */
    teamID?: (number|null);

    /** RspPlayerTeamAction action */
    action: number;

    /** RspPlayerTeamAction playerList */
    playerList?: (number[]|null);

    /** RspPlayerTeamAction readyList */
    readyList?: (number[]|null);

    /** RspPlayerTeamAction leaderUin */
    leaderUin?: (number|null);
}

/** Represents a RspPlayerTeamAction. */
export class RspPlayerTeamAction implements IRspPlayerTeamAction {

    /**
     * Constructs a new RspPlayerTeamAction.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRspPlayerTeamAction);

    /** RspPlayerTeamAction resultID. */
    public resultID: number;

    /** RspPlayerTeamAction teamID. */
    public teamID: number;

    /** RspPlayerTeamAction action. */
    public action: number;

    /** RspPlayerTeamAction playerList. */
    public playerList: number[];

    /** RspPlayerTeamAction readyList. */
    public readyList: number[];

    /** RspPlayerTeamAction leaderUin. */
    public leaderUin: number;

    /**
     * Creates a new RspPlayerTeamAction instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RspPlayerTeamAction instance
     */
    public static create(properties?: IRspPlayerTeamAction): RspPlayerTeamAction;

    /**
     * Encodes the specified RspPlayerTeamAction message. Does not implicitly {@link RspPlayerTeamAction.verify|verify} messages.
     * @param message RspPlayerTeamAction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRspPlayerTeamAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RspPlayerTeamAction message, length delimited. Does not implicitly {@link RspPlayerTeamAction.verify|verify} messages.
     * @param message RspPlayerTeamAction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRspPlayerTeamAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RspPlayerTeamAction message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RspPlayerTeamAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RspPlayerTeamAction;

    /**
     * Decodes a RspPlayerTeamAction message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RspPlayerTeamAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RspPlayerTeamAction;

    /**
     * Verifies a RspPlayerTeamAction message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RspPlayerTeamAction message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RspPlayerTeamAction
     */
    public static fromObject(object: { [k: string]: any }): RspPlayerTeamAction;

    /**
     * Creates a plain object from a RspPlayerTeamAction message. Also converts values to other types if specified.
     * @param message RspPlayerTeamAction
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RspPlayerTeamAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RspPlayerTeamAction to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an InfPlayerTeamAction. */
export interface IInfPlayerTeamAction {

    /** InfPlayerTeamAction uin */
    uin?: (number|null);

    /** InfPlayerTeamAction action */
    action: number;

    /** InfPlayerTeamAction leaderUin */
    leaderUin?: (number|null);

    /** InfPlayerTeamAction targetSeat */
    targetSeat?: (number|null);
}

/** Represents an InfPlayerTeamAction. */
export class InfPlayerTeamAction implements IInfPlayerTeamAction {

    /**
     * Constructs a new InfPlayerTeamAction.
     * @param [properties] Properties to set
     */
    constructor(properties?: IInfPlayerTeamAction);

    /** InfPlayerTeamAction uin. */
    public uin: number;

    /** InfPlayerTeamAction action. */
    public action: number;

    /** InfPlayerTeamAction leaderUin. */
    public leaderUin: number;

    /** InfPlayerTeamAction targetSeat. */
    public targetSeat: number;

    /**
     * Creates a new InfPlayerTeamAction instance using the specified properties.
     * @param [properties] Properties to set
     * @returns InfPlayerTeamAction instance
     */
    public static create(properties?: IInfPlayerTeamAction): InfPlayerTeamAction;

    /**
     * Encodes the specified InfPlayerTeamAction message. Does not implicitly {@link InfPlayerTeamAction.verify|verify} messages.
     * @param message InfPlayerTeamAction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IInfPlayerTeamAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified InfPlayerTeamAction message, length delimited. Does not implicitly {@link InfPlayerTeamAction.verify|verify} messages.
     * @param message InfPlayerTeamAction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IInfPlayerTeamAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an InfPlayerTeamAction message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns InfPlayerTeamAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): InfPlayerTeamAction;

    /**
     * Decodes an InfPlayerTeamAction message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns InfPlayerTeamAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): InfPlayerTeamAction;

    /**
     * Verifies an InfPlayerTeamAction message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an InfPlayerTeamAction message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns InfPlayerTeamAction
     */
    public static fromObject(object: { [k: string]: any }): InfPlayerTeamAction;

    /**
     * Creates a plain object from an InfPlayerTeamAction message. Also converts values to other types if specified.
     * @param message InfPlayerTeamAction
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: InfPlayerTeamAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this InfPlayerTeamAction to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ReqPlayerMatch. */
export interface IReqPlayerMatch {

    /** ReqPlayerMatch operation */
    operation: number;

    /** ReqPlayerMatch type */
    type: number;
}

/** Represents a ReqPlayerMatch. */
export class ReqPlayerMatch implements IReqPlayerMatch {

    /**
     * Constructs a new ReqPlayerMatch.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqPlayerMatch);

    /** ReqPlayerMatch operation. */
    public operation: number;

    /** ReqPlayerMatch type. */
    public type: number;

    /**
     * Creates a new ReqPlayerMatch instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqPlayerMatch instance
     */
    public static create(properties?: IReqPlayerMatch): ReqPlayerMatch;

    /**
     * Encodes the specified ReqPlayerMatch message. Does not implicitly {@link ReqPlayerMatch.verify|verify} messages.
     * @param message ReqPlayerMatch message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqPlayerMatch, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqPlayerMatch message, length delimited. Does not implicitly {@link ReqPlayerMatch.verify|verify} messages.
     * @param message ReqPlayerMatch message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqPlayerMatch, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqPlayerMatch message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqPlayerMatch
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqPlayerMatch;

    /**
     * Decodes a ReqPlayerMatch message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqPlayerMatch
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqPlayerMatch;

    /**
     * Verifies a ReqPlayerMatch message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqPlayerMatch message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqPlayerMatch
     */
    public static fromObject(object: { [k: string]: any }): ReqPlayerMatch;

    /**
     * Creates a plain object from a ReqPlayerMatch message. Also converts values to other types if specified.
     * @param message ReqPlayerMatch
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqPlayerMatch, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqPlayerMatch to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an InfPlayerMatch. */
export interface IInfPlayerMatch {

    /** InfPlayerMatch operation */
    operation: number;

    /** InfPlayerMatch type */
    type: number;
}

/** Represents an InfPlayerMatch. */
export class InfPlayerMatch implements IInfPlayerMatch {

    /**
     * Constructs a new InfPlayerMatch.
     * @param [properties] Properties to set
     */
    constructor(properties?: IInfPlayerMatch);

    /** InfPlayerMatch operation. */
    public operation: number;

    /** InfPlayerMatch type. */
    public type: number;

    /**
     * Creates a new InfPlayerMatch instance using the specified properties.
     * @param [properties] Properties to set
     * @returns InfPlayerMatch instance
     */
    public static create(properties?: IInfPlayerMatch): InfPlayerMatch;

    /**
     * Encodes the specified InfPlayerMatch message. Does not implicitly {@link InfPlayerMatch.verify|verify} messages.
     * @param message InfPlayerMatch message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IInfPlayerMatch, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified InfPlayerMatch message, length delimited. Does not implicitly {@link InfPlayerMatch.verify|verify} messages.
     * @param message InfPlayerMatch message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IInfPlayerMatch, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an InfPlayerMatch message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns InfPlayerMatch
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): InfPlayerMatch;

    /**
     * Decodes an InfPlayerMatch message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns InfPlayerMatch
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): InfPlayerMatch;

    /**
     * Verifies an InfPlayerMatch message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an InfPlayerMatch message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns InfPlayerMatch
     */
    public static fromObject(object: { [k: string]: any }): InfPlayerMatch;

    /**
     * Creates a plain object from an InfPlayerMatch message. Also converts values to other types if specified.
     * @param message InfPlayerMatch
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: InfPlayerMatch, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this InfPlayerMatch to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a TeamDetail. */
export interface ITeamDetail {

    /** TeamDetail teamID */
    teamID: number;

    /** TeamDetail playerList */
    playerList?: (number[]|null);
}

/** Represents a TeamDetail. */
export class TeamDetail implements ITeamDetail {

    /**
     * Constructs a new TeamDetail.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITeamDetail);

    /** TeamDetail teamID. */
    public teamID: number;

    /** TeamDetail playerList. */
    public playerList: number[];

    /**
     * Creates a new TeamDetail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TeamDetail instance
     */
    public static create(properties?: ITeamDetail): TeamDetail;

    /**
     * Encodes the specified TeamDetail message. Does not implicitly {@link TeamDetail.verify|verify} messages.
     * @param message TeamDetail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITeamDetail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TeamDetail message, length delimited. Does not implicitly {@link TeamDetail.verify|verify} messages.
     * @param message TeamDetail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITeamDetail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TeamDetail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TeamDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TeamDetail;

    /**
     * Decodes a TeamDetail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TeamDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TeamDetail;

    /**
     * Verifies a TeamDetail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TeamDetail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TeamDetail
     */
    public static fromObject(object: { [k: string]: any }): TeamDetail;

    /**
     * Creates a plain object from a TeamDetail message. Also converts values to other types if specified.
     * @param message TeamDetail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TeamDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TeamDetail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an InfPlayerMatchSuccess. */
export interface IInfPlayerMatchSuccess {

    /** InfPlayerMatchSuccess tableID */
    tableID: number;

    /** InfPlayerMatchSuccess teamList */
    teamList?: (ITeamDetail[]|null);
}

/** Represents an InfPlayerMatchSuccess. */
export class InfPlayerMatchSuccess implements IInfPlayerMatchSuccess {

    /**
     * Constructs a new InfPlayerMatchSuccess.
     * @param [properties] Properties to set
     */
    constructor(properties?: IInfPlayerMatchSuccess);

    /** InfPlayerMatchSuccess tableID. */
    public tableID: number;

    /** InfPlayerMatchSuccess teamList. */
    public teamList: ITeamDetail[];

    /**
     * Creates a new InfPlayerMatchSuccess instance using the specified properties.
     * @param [properties] Properties to set
     * @returns InfPlayerMatchSuccess instance
     */
    public static create(properties?: IInfPlayerMatchSuccess): InfPlayerMatchSuccess;

    /**
     * Encodes the specified InfPlayerMatchSuccess message. Does not implicitly {@link InfPlayerMatchSuccess.verify|verify} messages.
     * @param message InfPlayerMatchSuccess message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IInfPlayerMatchSuccess, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified InfPlayerMatchSuccess message, length delimited. Does not implicitly {@link InfPlayerMatchSuccess.verify|verify} messages.
     * @param message InfPlayerMatchSuccess message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IInfPlayerMatchSuccess, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an InfPlayerMatchSuccess message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns InfPlayerMatchSuccess
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): InfPlayerMatchSuccess;

    /**
     * Decodes an InfPlayerMatchSuccess message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns InfPlayerMatchSuccess
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): InfPlayerMatchSuccess;

    /**
     * Verifies an InfPlayerMatchSuccess message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an InfPlayerMatchSuccess message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns InfPlayerMatchSuccess
     */
    public static fromObject(object: { [k: string]: any }): InfPlayerMatchSuccess;

    /**
     * Creates a plain object from an InfPlayerMatchSuccess message. Also converts values to other types if specified.
     * @param message InfPlayerMatchSuccess
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: InfPlayerMatchSuccess, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this InfPlayerMatchSuccess to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ReqPlayerStartGame. */
export interface IReqPlayerStartGame {
}

/** Represents a ReqPlayerStartGame. */
export class ReqPlayerStartGame implements IReqPlayerStartGame {

    /**
     * Constructs a new ReqPlayerStartGame.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqPlayerStartGame);

    /**
     * Creates a new ReqPlayerStartGame instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqPlayerStartGame instance
     */
    public static create(properties?: IReqPlayerStartGame): ReqPlayerStartGame;

    /**
     * Encodes the specified ReqPlayerStartGame message. Does not implicitly {@link ReqPlayerStartGame.verify|verify} messages.
     * @param message ReqPlayerStartGame message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqPlayerStartGame, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqPlayerStartGame message, length delimited. Does not implicitly {@link ReqPlayerStartGame.verify|verify} messages.
     * @param message ReqPlayerStartGame message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqPlayerStartGame, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqPlayerStartGame message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqPlayerStartGame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqPlayerStartGame;

    /**
     * Decodes a ReqPlayerStartGame message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqPlayerStartGame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqPlayerStartGame;

    /**
     * Verifies a ReqPlayerStartGame message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqPlayerStartGame message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqPlayerStartGame
     */
    public static fromObject(object: { [k: string]: any }): ReqPlayerStartGame;

    /**
     * Creates a plain object from a ReqPlayerStartGame message. Also converts values to other types if specified.
     * @param message ReqPlayerStartGame
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqPlayerStartGame, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqPlayerStartGame to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an InfPlayerStartGame. */
export interface IInfPlayerStartGame {
}

/** Represents an InfPlayerStartGame. */
export class InfPlayerStartGame implements IInfPlayerStartGame {

    /**
     * Constructs a new InfPlayerStartGame.
     * @param [properties] Properties to set
     */
    constructor(properties?: IInfPlayerStartGame);

    /**
     * Creates a new InfPlayerStartGame instance using the specified properties.
     * @param [properties] Properties to set
     * @returns InfPlayerStartGame instance
     */
    public static create(properties?: IInfPlayerStartGame): InfPlayerStartGame;

    /**
     * Encodes the specified InfPlayerStartGame message. Does not implicitly {@link InfPlayerStartGame.verify|verify} messages.
     * @param message InfPlayerStartGame message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IInfPlayerStartGame, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified InfPlayerStartGame message, length delimited. Does not implicitly {@link InfPlayerStartGame.verify|verify} messages.
     * @param message InfPlayerStartGame message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IInfPlayerStartGame, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an InfPlayerStartGame message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns InfPlayerStartGame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): InfPlayerStartGame;

    /**
     * Decodes an InfPlayerStartGame message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns InfPlayerStartGame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): InfPlayerStartGame;

    /**
     * Verifies an InfPlayerStartGame message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an InfPlayerStartGame message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns InfPlayerStartGame
     */
    public static fromObject(object: { [k: string]: any }): InfPlayerStartGame;

    /**
     * Creates a plain object from an InfPlayerStartGame message. Also converts values to other types if specified.
     * @param message InfPlayerStartGame
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: InfPlayerStartGame, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this InfPlayerStartGame to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ReqPlayerEndGame. */
export interface IReqPlayerEndGame {

    /** ReqPlayerEndGame rank */
    rank: number;
}

/** Represents a ReqPlayerEndGame. */
export class ReqPlayerEndGame implements IReqPlayerEndGame {

    /**
     * Constructs a new ReqPlayerEndGame.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqPlayerEndGame);

    /** ReqPlayerEndGame rank. */
    public rank: number;

    /**
     * Creates a new ReqPlayerEndGame instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqPlayerEndGame instance
     */
    public static create(properties?: IReqPlayerEndGame): ReqPlayerEndGame;

    /**
     * Encodes the specified ReqPlayerEndGame message. Does not implicitly {@link ReqPlayerEndGame.verify|verify} messages.
     * @param message ReqPlayerEndGame message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqPlayerEndGame, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqPlayerEndGame message, length delimited. Does not implicitly {@link ReqPlayerEndGame.verify|verify} messages.
     * @param message ReqPlayerEndGame message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqPlayerEndGame, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqPlayerEndGame message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqPlayerEndGame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqPlayerEndGame;

    /**
     * Decodes a ReqPlayerEndGame message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqPlayerEndGame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqPlayerEndGame;

    /**
     * Verifies a ReqPlayerEndGame message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqPlayerEndGame message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqPlayerEndGame
     */
    public static fromObject(object: { [k: string]: any }): ReqPlayerEndGame;

    /**
     * Creates a plain object from a ReqPlayerEndGame message. Also converts values to other types if specified.
     * @param message ReqPlayerEndGame
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqPlayerEndGame, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqPlayerEndGame to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an InfPlayerEndGame. */
export interface IInfPlayerEndGame {
}

/** Represents an InfPlayerEndGame. */
export class InfPlayerEndGame implements IInfPlayerEndGame {

    /**
     * Constructs a new InfPlayerEndGame.
     * @param [properties] Properties to set
     */
    constructor(properties?: IInfPlayerEndGame);

    /**
     * Creates a new InfPlayerEndGame instance using the specified properties.
     * @param [properties] Properties to set
     * @returns InfPlayerEndGame instance
     */
    public static create(properties?: IInfPlayerEndGame): InfPlayerEndGame;

    /**
     * Encodes the specified InfPlayerEndGame message. Does not implicitly {@link InfPlayerEndGame.verify|verify} messages.
     * @param message InfPlayerEndGame message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IInfPlayerEndGame, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified InfPlayerEndGame message, length delimited. Does not implicitly {@link InfPlayerEndGame.verify|verify} messages.
     * @param message InfPlayerEndGame message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IInfPlayerEndGame, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an InfPlayerEndGame message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns InfPlayerEndGame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): InfPlayerEndGame;

    /**
     * Decodes an InfPlayerEndGame message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns InfPlayerEndGame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): InfPlayerEndGame;

    /**
     * Verifies an InfPlayerEndGame message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an InfPlayerEndGame message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns InfPlayerEndGame
     */
    public static fromObject(object: { [k: string]: any }): InfPlayerEndGame;

    /**
     * Creates a plain object from an InfPlayerEndGame message. Also converts values to other types if specified.
     * @param message InfPlayerEndGame
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: InfPlayerEndGame, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this InfPlayerEndGame to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ReqPlayerGameData. */
export interface IReqPlayerGameData {
}

/** Represents a ReqPlayerGameData. */
export class ReqPlayerGameData implements IReqPlayerGameData {

    /**
     * Constructs a new ReqPlayerGameData.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqPlayerGameData);

    /**
     * Creates a new ReqPlayerGameData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqPlayerGameData instance
     */
    public static create(properties?: IReqPlayerGameData): ReqPlayerGameData;

    /**
     * Encodes the specified ReqPlayerGameData message. Does not implicitly {@link ReqPlayerGameData.verify|verify} messages.
     * @param message ReqPlayerGameData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqPlayerGameData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqPlayerGameData message, length delimited. Does not implicitly {@link ReqPlayerGameData.verify|verify} messages.
     * @param message ReqPlayerGameData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqPlayerGameData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqPlayerGameData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqPlayerGameData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqPlayerGameData;

    /**
     * Decodes a ReqPlayerGameData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqPlayerGameData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqPlayerGameData;

    /**
     * Verifies a ReqPlayerGameData message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqPlayerGameData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqPlayerGameData
     */
    public static fromObject(object: { [k: string]: any }): ReqPlayerGameData;

    /**
     * Creates a plain object from a ReqPlayerGameData message. Also converts values to other types if specified.
     * @param message ReqPlayerGameData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqPlayerGameData, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqPlayerGameData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an InfPlayerGameData. */
export interface IInfPlayerGameData {
}

/** Represents an InfPlayerGameData. */
export class InfPlayerGameData implements IInfPlayerGameData {

    /**
     * Constructs a new InfPlayerGameData.
     * @param [properties] Properties to set
     */
    constructor(properties?: IInfPlayerGameData);

    /**
     * Creates a new InfPlayerGameData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns InfPlayerGameData instance
     */
    public static create(properties?: IInfPlayerGameData): InfPlayerGameData;

    /**
     * Encodes the specified InfPlayerGameData message. Does not implicitly {@link InfPlayerGameData.verify|verify} messages.
     * @param message InfPlayerGameData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IInfPlayerGameData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified InfPlayerGameData message, length delimited. Does not implicitly {@link InfPlayerGameData.verify|verify} messages.
     * @param message InfPlayerGameData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IInfPlayerGameData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an InfPlayerGameData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns InfPlayerGameData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): InfPlayerGameData;

    /**
     * Decodes an InfPlayerGameData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns InfPlayerGameData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): InfPlayerGameData;

    /**
     * Verifies an InfPlayerGameData message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an InfPlayerGameData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns InfPlayerGameData
     */
    public static fromObject(object: { [k: string]: any }): InfPlayerGameData;

    /**
     * Creates a plain object from an InfPlayerGameData message. Also converts values to other types if specified.
     * @param message InfPlayerGameData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: InfPlayerGameData, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this InfPlayerGameData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PlayerOption. */
export interface IPlayerOption {

    /** PlayerOption uin */
    uin: number;

    /** PlayerOption option */
    option: number;
}

/** Represents a PlayerOption. */
export class PlayerOption implements IPlayerOption {

    /**
     * Constructs a new PlayerOption.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPlayerOption);

    /** PlayerOption uin. */
    public uin: number;

    /** PlayerOption option. */
    public option: number;

    /**
     * Creates a new PlayerOption instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayerOption instance
     */
    public static create(properties?: IPlayerOption): PlayerOption;

    /**
     * Encodes the specified PlayerOption message. Does not implicitly {@link PlayerOption.verify|verify} messages.
     * @param message PlayerOption message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPlayerOption, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PlayerOption message, length delimited. Does not implicitly {@link PlayerOption.verify|verify} messages.
     * @param message PlayerOption message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPlayerOption, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlayerOption message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PlayerOption
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlayerOption;

    /**
     * Decodes a PlayerOption message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PlayerOption
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PlayerOption;

    /**
     * Verifies a PlayerOption message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PlayerOption message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PlayerOption
     */
    public static fromObject(object: { [k: string]: any }): PlayerOption;

    /**
     * Creates a plain object from a PlayerOption message. Also converts values to other types if specified.
     * @param message PlayerOption
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PlayerOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PlayerOption to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ReqPlayerStepLock. */
export interface IReqPlayerStepLock {

    /** ReqPlayerStepLock optionList */
    optionList?: (IPlayerOption[]|null);
}

/** Represents a ReqPlayerStepLock. */
export class ReqPlayerStepLock implements IReqPlayerStepLock {

    /**
     * Constructs a new ReqPlayerStepLock.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqPlayerStepLock);

    /** ReqPlayerStepLock optionList. */
    public optionList: IPlayerOption[];

    /**
     * Creates a new ReqPlayerStepLock instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqPlayerStepLock instance
     */
    public static create(properties?: IReqPlayerStepLock): ReqPlayerStepLock;

    /**
     * Encodes the specified ReqPlayerStepLock message. Does not implicitly {@link ReqPlayerStepLock.verify|verify} messages.
     * @param message ReqPlayerStepLock message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqPlayerStepLock, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqPlayerStepLock message, length delimited. Does not implicitly {@link ReqPlayerStepLock.verify|verify} messages.
     * @param message ReqPlayerStepLock message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqPlayerStepLock, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqPlayerStepLock message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqPlayerStepLock
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqPlayerStepLock;

    /**
     * Decodes a ReqPlayerStepLock message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqPlayerStepLock
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqPlayerStepLock;

    /**
     * Verifies a ReqPlayerStepLock message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqPlayerStepLock message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqPlayerStepLock
     */
    public static fromObject(object: { [k: string]: any }): ReqPlayerStepLock;

    /**
     * Creates a plain object from a ReqPlayerStepLock message. Also converts values to other types if specified.
     * @param message ReqPlayerStepLock
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqPlayerStepLock, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqPlayerStepLock to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an InfPlayerStepLock. */
export interface IInfPlayerStepLock {

    /** InfPlayerStepLock step */
    step: number;

    /** InfPlayerStepLock optionList */
    optionList?: (IPlayerOption[]|null);
}

/** Represents an InfPlayerStepLock. */
export class InfPlayerStepLock implements IInfPlayerStepLock {

    /**
     * Constructs a new InfPlayerStepLock.
     * @param [properties] Properties to set
     */
    constructor(properties?: IInfPlayerStepLock);

    /** InfPlayerStepLock step. */
    public step: number;

    /** InfPlayerStepLock optionList. */
    public optionList: IPlayerOption[];

    /**
     * Creates a new InfPlayerStepLock instance using the specified properties.
     * @param [properties] Properties to set
     * @returns InfPlayerStepLock instance
     */
    public static create(properties?: IInfPlayerStepLock): InfPlayerStepLock;

    /**
     * Encodes the specified InfPlayerStepLock message. Does not implicitly {@link InfPlayerStepLock.verify|verify} messages.
     * @param message InfPlayerStepLock message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IInfPlayerStepLock, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified InfPlayerStepLock message, length delimited. Does not implicitly {@link InfPlayerStepLock.verify|verify} messages.
     * @param message InfPlayerStepLock message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IInfPlayerStepLock, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an InfPlayerStepLock message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns InfPlayerStepLock
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): InfPlayerStepLock;

    /**
     * Decodes an InfPlayerStepLock message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns InfPlayerStepLock
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): InfPlayerStepLock;

    /**
     * Verifies an InfPlayerStepLock message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an InfPlayerStepLock message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns InfPlayerStepLock
     */
    public static fromObject(object: { [k: string]: any }): InfPlayerStepLock;

    /**
     * Creates a plain object from an InfPlayerStepLock message. Also converts values to other types if specified.
     * @param message InfPlayerStepLock
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: InfPlayerStepLock, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this InfPlayerStepLock to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ReqPlayerGlobalData. */
export interface IReqPlayerGlobalData {
}

/** Represents a ReqPlayerGlobalData. */
export class ReqPlayerGlobalData implements IReqPlayerGlobalData {

    /**
     * Constructs a new ReqPlayerGlobalData.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqPlayerGlobalData);

    /**
     * Creates a new ReqPlayerGlobalData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqPlayerGlobalData instance
     */
    public static create(properties?: IReqPlayerGlobalData): ReqPlayerGlobalData;

    /**
     * Encodes the specified ReqPlayerGlobalData message. Does not implicitly {@link ReqPlayerGlobalData.verify|verify} messages.
     * @param message ReqPlayerGlobalData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqPlayerGlobalData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqPlayerGlobalData message, length delimited. Does not implicitly {@link ReqPlayerGlobalData.verify|verify} messages.
     * @param message ReqPlayerGlobalData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqPlayerGlobalData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqPlayerGlobalData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqPlayerGlobalData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqPlayerGlobalData;

    /**
     * Decodes a ReqPlayerGlobalData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqPlayerGlobalData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqPlayerGlobalData;

    /**
     * Verifies a ReqPlayerGlobalData message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqPlayerGlobalData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqPlayerGlobalData
     */
    public static fromObject(object: { [k: string]: any }): ReqPlayerGlobalData;

    /**
     * Creates a plain object from a ReqPlayerGlobalData message. Also converts values to other types if specified.
     * @param message ReqPlayerGlobalData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqPlayerGlobalData, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqPlayerGlobalData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an InfPlayerGlobalData. */
export interface IInfPlayerGlobalData {
}

/** Represents an InfPlayerGlobalData. */
export class InfPlayerGlobalData implements IInfPlayerGlobalData {

    /**
     * Constructs a new InfPlayerGlobalData.
     * @param [properties] Properties to set
     */
    constructor(properties?: IInfPlayerGlobalData);

    /**
     * Creates a new InfPlayerGlobalData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns InfPlayerGlobalData instance
     */
    public static create(properties?: IInfPlayerGlobalData): InfPlayerGlobalData;

    /**
     * Encodes the specified InfPlayerGlobalData message. Does not implicitly {@link InfPlayerGlobalData.verify|verify} messages.
     * @param message InfPlayerGlobalData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IInfPlayerGlobalData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified InfPlayerGlobalData message, length delimited. Does not implicitly {@link InfPlayerGlobalData.verify|verify} messages.
     * @param message InfPlayerGlobalData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IInfPlayerGlobalData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an InfPlayerGlobalData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns InfPlayerGlobalData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): InfPlayerGlobalData;

    /**
     * Decodes an InfPlayerGlobalData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns InfPlayerGlobalData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): InfPlayerGlobalData;

    /**
     * Verifies an InfPlayerGlobalData message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an InfPlayerGlobalData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns InfPlayerGlobalData
     */
    public static fromObject(object: { [k: string]: any }): InfPlayerGlobalData;

    /**
     * Creates a plain object from an InfPlayerGlobalData message. Also converts values to other types if specified.
     * @param message InfPlayerGlobalData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: InfPlayerGlobalData, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this InfPlayerGlobalData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ReqPlayerToGatewayMgr. */
export interface IReqPlayerToGatewayMgr {
}

/** Represents a ReqPlayerToGatewayMgr. */
export class ReqPlayerToGatewayMgr implements IReqPlayerToGatewayMgr {

    /**
     * Constructs a new ReqPlayerToGatewayMgr.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqPlayerToGatewayMgr);

    /**
     * Creates a new ReqPlayerToGatewayMgr instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqPlayerToGatewayMgr instance
     */
    public static create(properties?: IReqPlayerToGatewayMgr): ReqPlayerToGatewayMgr;

    /**
     * Encodes the specified ReqPlayerToGatewayMgr message. Does not implicitly {@link ReqPlayerToGatewayMgr.verify|verify} messages.
     * @param message ReqPlayerToGatewayMgr message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqPlayerToGatewayMgr, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqPlayerToGatewayMgr message, length delimited. Does not implicitly {@link ReqPlayerToGatewayMgr.verify|verify} messages.
     * @param message ReqPlayerToGatewayMgr message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqPlayerToGatewayMgr, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqPlayerToGatewayMgr message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqPlayerToGatewayMgr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqPlayerToGatewayMgr;

    /**
     * Decodes a ReqPlayerToGatewayMgr message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqPlayerToGatewayMgr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqPlayerToGatewayMgr;

    /**
     * Verifies a ReqPlayerToGatewayMgr message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqPlayerToGatewayMgr message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqPlayerToGatewayMgr
     */
    public static fromObject(object: { [k: string]: any }): ReqPlayerToGatewayMgr;

    /**
     * Creates a plain object from a ReqPlayerToGatewayMgr message. Also converts values to other types if specified.
     * @param message ReqPlayerToGatewayMgr
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqPlayerToGatewayMgr, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqPlayerToGatewayMgr to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RspPlayerToGatewayMgr. */
export interface IRspPlayerToGatewayMgr {

    /** RspPlayerToGatewayMgr uin */
    uin: number;

    /** RspPlayerToGatewayMgr url */
    url: string;

    /** RspPlayerToGatewayMgr internetPort */
    internetPort: number;

    /** RspPlayerToGatewayMgr groupid */
    groupid: number;
}

/** Represents a RspPlayerToGatewayMgr. */
export class RspPlayerToGatewayMgr implements IRspPlayerToGatewayMgr {

    /**
     * Constructs a new RspPlayerToGatewayMgr.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRspPlayerToGatewayMgr);

    /** RspPlayerToGatewayMgr uin. */
    public uin: number;

    /** RspPlayerToGatewayMgr url. */
    public url: string;

    /** RspPlayerToGatewayMgr internetPort. */
    public internetPort: number;

    /** RspPlayerToGatewayMgr groupid. */
    public groupid: number;

    /**
     * Creates a new RspPlayerToGatewayMgr instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RspPlayerToGatewayMgr instance
     */
    public static create(properties?: IRspPlayerToGatewayMgr): RspPlayerToGatewayMgr;

    /**
     * Encodes the specified RspPlayerToGatewayMgr message. Does not implicitly {@link RspPlayerToGatewayMgr.verify|verify} messages.
     * @param message RspPlayerToGatewayMgr message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRspPlayerToGatewayMgr, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RspPlayerToGatewayMgr message, length delimited. Does not implicitly {@link RspPlayerToGatewayMgr.verify|verify} messages.
     * @param message RspPlayerToGatewayMgr message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRspPlayerToGatewayMgr, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RspPlayerToGatewayMgr message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RspPlayerToGatewayMgr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RspPlayerToGatewayMgr;

    /**
     * Decodes a RspPlayerToGatewayMgr message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RspPlayerToGatewayMgr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RspPlayerToGatewayMgr;

    /**
     * Verifies a RspPlayerToGatewayMgr message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RspPlayerToGatewayMgr message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RspPlayerToGatewayMgr
     */
    public static fromObject(object: { [k: string]: any }): RspPlayerToGatewayMgr;

    /**
     * Creates a plain object from a RspPlayerToGatewayMgr message. Also converts values to other types if specified.
     * @param message RspPlayerToGatewayMgr
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RspPlayerToGatewayMgr, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RspPlayerToGatewayMgr to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ReqPing. */
export interface IReqPing {

    /** ReqPing timestamp */
    timestamp: (number|Long);
}

/** Represents a ReqPing. */
export class ReqPing implements IReqPing {

    /**
     * Constructs a new ReqPing.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqPing);

    /** ReqPing timestamp. */
    public timestamp: (number|Long);

    /**
     * Creates a new ReqPing instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqPing instance
     */
    public static create(properties?: IReqPing): ReqPing;

    /**
     * Encodes the specified ReqPing message. Does not implicitly {@link ReqPing.verify|verify} messages.
     * @param message ReqPing message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqPing, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqPing message, length delimited. Does not implicitly {@link ReqPing.verify|verify} messages.
     * @param message ReqPing message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqPing, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqPing message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqPing
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqPing;

    /**
     * Decodes a ReqPing message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqPing
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqPing;

    /**
     * Verifies a ReqPing message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqPing message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqPing
     */
    public static fromObject(object: { [k: string]: any }): ReqPing;

    /**
     * Creates a plain object from a ReqPing message. Also converts values to other types if specified.
     * @param message ReqPing
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqPing, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqPing to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RspPing. */
export interface IRspPing {

    /** RspPing timestamp */
    timestamp: (number|Long);
}

/** Represents a RspPing. */
export class RspPing implements IRspPing {

    /**
     * Constructs a new RspPing.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRspPing);

    /** RspPing timestamp. */
    public timestamp: (number|Long);

    /**
     * Creates a new RspPing instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RspPing instance
     */
    public static create(properties?: IRspPing): RspPing;

    /**
     * Encodes the specified RspPing message. Does not implicitly {@link RspPing.verify|verify} messages.
     * @param message RspPing message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRspPing, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RspPing message, length delimited. Does not implicitly {@link RspPing.verify|verify} messages.
     * @param message RspPing message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRspPing, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RspPing message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RspPing
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RspPing;

    /**
     * Decodes a RspPing message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RspPing
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RspPing;

    /**
     * Verifies a RspPing message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RspPing message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RspPing
     */
    public static fromObject(object: { [k: string]: any }): RspPing;

    /**
     * Creates a plain object from a RspPing message. Also converts values to other types if specified.
     * @param message RspPing
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RspPing, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RspPing to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ReqPlayerLeaveTable. */
export interface IReqPlayerLeaveTable {
}

/** Represents a ReqPlayerLeaveTable. */
export class ReqPlayerLeaveTable implements IReqPlayerLeaveTable {

    /**
     * Constructs a new ReqPlayerLeaveTable.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqPlayerLeaveTable);

    /**
     * Creates a new ReqPlayerLeaveTable instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqPlayerLeaveTable instance
     */
    public static create(properties?: IReqPlayerLeaveTable): ReqPlayerLeaveTable;

    /**
     * Encodes the specified ReqPlayerLeaveTable message. Does not implicitly {@link ReqPlayerLeaveTable.verify|verify} messages.
     * @param message ReqPlayerLeaveTable message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqPlayerLeaveTable, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqPlayerLeaveTable message, length delimited. Does not implicitly {@link ReqPlayerLeaveTable.verify|verify} messages.
     * @param message ReqPlayerLeaveTable message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqPlayerLeaveTable, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqPlayerLeaveTable message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqPlayerLeaveTable
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqPlayerLeaveTable;

    /**
     * Decodes a ReqPlayerLeaveTable message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqPlayerLeaveTable
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqPlayerLeaveTable;

    /**
     * Verifies a ReqPlayerLeaveTable message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqPlayerLeaveTable message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqPlayerLeaveTable
     */
    public static fromObject(object: { [k: string]: any }): ReqPlayerLeaveTable;

    /**
     * Creates a plain object from a ReqPlayerLeaveTable message. Also converts values to other types if specified.
     * @param message ReqPlayerLeaveTable
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqPlayerLeaveTable, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqPlayerLeaveTable to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** SSProtoID enum. */
export enum SSProtoID {
    REQ_REGISTER_TO_CTRL = 400001,
    RSP_REGISTER_TO_CTRL = 400002,
    INF_CTRL_PLAYER_LOGIN = 400003,
    INF_CTRL_PLAYER_LOGOUT = 400004,
    INF_MOVE_OUT = 400005,
    RSP_MOVE_OUT = 400006,
    INF_MOVE_IN = 400007,
    RSP_MOVE_IN = 400008,
    REQ_ENTER_MATCH = 400010,
    RSP_ENTER_MATCH = 400011,
    REQ_CANCEL_MATCH = 400012,
    RSP_CANCEL_MATCH = 400013,
    INF_MATCH_SUCCESS = 400014,
    REQ_REGISTER_TO_GATEWAY = 410001,
    RSP_REGISTER_TO_GATEWAY = 410002,
    INF_GATEWAY_TO_LOGIC_HEARTBEAT = 410003,
    INF_CLIENT_DISCONNECT = 410004,
    INF_PLAYER_DISCONNECT = 410005,
    REQ_REGISTER_TO_DBPROC = 420000,
    REQ_GET_PLAYER_INFO = 420001,
    RSP_GET_PLAYER_INFO = 420002,
    REQ_EXEC_UPDATE = 420003,
    INF_LOGIC_TO_DBPROC_HEARTBEAT = 420004,
    REQ_REGISTER_TO_GMSERVER = 430001,
    RSP_REGISTER_TO_GMSERVER = 430002,
    INF_LOGIC_TO_GMSVR_HEARTBEAT = 430003,
    REQ_GTE_LOGIC_S_IP_PORT = 440001,
    RSP_GTE_LOGIC_S_IP_PORT = 440002,
    REQ_GATEWAY_TO_GATEWAYMGR = 450001,
    RSP_GATEWAY_TO_GATEWAYMGR = 450002,
    REQ_LOGIC_TO_GATEWAYMGR = 460001,
    RSP_LOGIC_TO_GATEWAYMGR = 460002,
    INF_LOGIC_TO_GATEWAYMGR_HEARTBEAT = 460003,
    REQ_DB_REGISTER_TO_DBMGR = 470001,
    REQ_DB_HEART_BEAT_TO_DBMGR = 470002,
    DBPROC_MYSQL_PING = 470003,
    REQ_ASSIGN_DB_INFO = 480001,
    RSP_ASSIGN_DB_INFO = 480002,
    INF_LOGIC_DBMGR_HEARTBEAT = 480003,
    REQ_ASSIGN_GATEWAY_INFO = 490001,
    RSP_ASSIGN_GATEWAY_INFO = 490002
}

/** CSProtoID enum. */
export enum CSProtoID {
    REQ_PLAYER_AUTH = 500001,
    RSP_PLAYER_AUTH = 500002,
    REQ_PLAYER_LOGIN = 600001,
    RSP_PLAYER_LOGIN = 600002,
    RSP_PLAYER_NOT_LOGIN = 600003,
    REQ_PLAYER_CREATE_TEAM = 600004,
    REQ_PLAYER_JOIN_TEAM = 600005,
    REQ_PLAYER_LEAVE_TEAM = 600006,
    REQ_PLAYER_CHANGE_SEAT = 600007,
    REQ_REMOVE_PLAYER = 600008,
    REQ_PLAYER_READY = 600009,
    RSP_PLAYER_TEAM_ACTION = 600010,
    INF_PLAYER_TEAM_ACTION = 600011,
    REQ_PLAYER_START_GAME = 600012,
    INF_PLAYER_START_GAME = 600013,
    REQ_PLAYER_GAME_DATA = 600014,
    INF_PLAYER_GAME_DATA = 600015,
    REQ_PLAYER_GLOBAL_DATA = 600016,
    INF_PLAYER_GLOBAL_DATA = 600017,
    REQ_PLAYER_MATCH = 600018,
    INF_PLAYER_MATCH = 600019,
    REQ_PING = 600020,
    RSP_PING = 600021,
    REQ_PLAYER_END_GAME = 600022,
    INF_PLAYER_END_GAME = 600023,
    INF_PLAYER_MATCH_SUCCESS = 600024,
    REQ_LEAVE_TABLE = 600025,
    REQ_PLAYER_STEP_LOCK = 700001,
    INF_PLAYER_STEP_LOCK = 700002,
    REQ_PLAYER_TO_GATEWAYMGR = 800001,
    RSP_PLAYER_TO_GATEWAYMGR = 800002,
    REQ_HEARTBEAT = 900001
}
