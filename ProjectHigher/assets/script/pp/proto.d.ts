import * as $protobuf from "protobufjs";

/** GlobalProtoID enum. */
export enum GlobalProtoID {
    REQ_GET_PLAYER_MAX_SCORE = 100001,
    RSP_GET_PLAYER_MAX_SCORE = 100002,
    REQ_PLAYER_RANKLIST = 100003,
    RSP_PLAYER_RANKLIST = 100004,
    REQ_UPDATE_PLAY_MAX_SCORE = 100005,
    REQ_GET_PLAYER_NEARBY_RANK = 100006,
    RSP_GET_PLAYER_NEARBY_RANK = 100007
}

/** GameProtoID enum. */
export enum GameProtoID {
    REQ_PLAYER_ACTION = 200001,
    INF_PLAYER_ACTION = 200002,
    REQ_UPDATE_PLAYER_MAX_SCORE = 200003
}

/** Properties of a RspGetPlayerMaxScore. */
export interface IRspGetPlayerMaxScore {

    /** RspGetPlayerMaxScore itype */
    itype: number;

    /** RspGetPlayerMaxScore score */
    score: number;
}

/** Represents a RspGetPlayerMaxScore. */
export class RspGetPlayerMaxScore implements IRspGetPlayerMaxScore {

    /**
     * Constructs a new RspGetPlayerMaxScore.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRspGetPlayerMaxScore);

    /** RspGetPlayerMaxScore itype. */
    public itype: number;

    /** RspGetPlayerMaxScore score. */
    public score: number;

    /**
     * Creates a new RspGetPlayerMaxScore instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RspGetPlayerMaxScore instance
     */
    public static create(properties?: IRspGetPlayerMaxScore): RspGetPlayerMaxScore;

    /**
     * Encodes the specified RspGetPlayerMaxScore message. Does not implicitly {@link RspGetPlayerMaxScore.verify|verify} messages.
     * @param message RspGetPlayerMaxScore message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRspGetPlayerMaxScore, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RspGetPlayerMaxScore message, length delimited. Does not implicitly {@link RspGetPlayerMaxScore.verify|verify} messages.
     * @param message RspGetPlayerMaxScore message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRspGetPlayerMaxScore, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RspGetPlayerMaxScore message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RspGetPlayerMaxScore
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RspGetPlayerMaxScore;

    /**
     * Decodes a RspGetPlayerMaxScore message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RspGetPlayerMaxScore
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RspGetPlayerMaxScore;

    /**
     * Verifies a RspGetPlayerMaxScore message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RspGetPlayerMaxScore message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RspGetPlayerMaxScore
     */
    public static fromObject(object: { [k: string]: any }): RspGetPlayerMaxScore;

    /**
     * Creates a plain object from a RspGetPlayerMaxScore message. Also converts values to other types if specified.
     * @param message RspGetPlayerMaxScore
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RspGetPlayerMaxScore, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RspGetPlayerMaxScore to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ReqPlayerRankList. */
export interface IReqPlayerRankList {

    /** ReqPlayerRankList itype */
    itype: number;

    /** ReqPlayerRankList beginRank */
    beginRank: number;

    /** ReqPlayerRankList len */
    len: number;
}

/** Represents a ReqPlayerRankList. */
export class ReqPlayerRankList implements IReqPlayerRankList {

    /**
     * Constructs a new ReqPlayerRankList.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqPlayerRankList);

    /** ReqPlayerRankList itype. */
    public itype: number;

    /** ReqPlayerRankList beginRank. */
    public beginRank: number;

    /** ReqPlayerRankList len. */
    public len: number;

    /**
     * Creates a new ReqPlayerRankList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqPlayerRankList instance
     */
    public static create(properties?: IReqPlayerRankList): ReqPlayerRankList;

    /**
     * Encodes the specified ReqPlayerRankList message. Does not implicitly {@link ReqPlayerRankList.verify|verify} messages.
     * @param message ReqPlayerRankList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqPlayerRankList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqPlayerRankList message, length delimited. Does not implicitly {@link ReqPlayerRankList.verify|verify} messages.
     * @param message ReqPlayerRankList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqPlayerRankList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqPlayerRankList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqPlayerRankList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqPlayerRankList;

    /**
     * Decodes a ReqPlayerRankList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqPlayerRankList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqPlayerRankList;

    /**
     * Verifies a ReqPlayerRankList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqPlayerRankList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqPlayerRankList
     */
    public static fromObject(object: { [k: string]: any }): ReqPlayerRankList;

    /**
     * Creates a plain object from a ReqPlayerRankList message. Also converts values to other types if specified.
     * @param message ReqPlayerRankList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqPlayerRankList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqPlayerRankList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RankEntry. */
export interface IRankEntry {

    /** RankEntry uin */
    uin: number;

    /** RankEntry rank */
    rank: number;

    /** RankEntry score */
    score: number;
}

/** Represents a RankEntry. */
export class RankEntry implements IRankEntry {

    /**
     * Constructs a new RankEntry.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRankEntry);

    /** RankEntry uin. */
    public uin: number;

    /** RankEntry rank. */
    public rank: number;

    /** RankEntry score. */
    public score: number;

    /**
     * Creates a new RankEntry instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RankEntry instance
     */
    public static create(properties?: IRankEntry): RankEntry;

    /**
     * Encodes the specified RankEntry message. Does not implicitly {@link RankEntry.verify|verify} messages.
     * @param message RankEntry message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRankEntry, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RankEntry message, length delimited. Does not implicitly {@link RankEntry.verify|verify} messages.
     * @param message RankEntry message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRankEntry, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RankEntry message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RankEntry
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RankEntry;

    /**
     * Decodes a RankEntry message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RankEntry
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RankEntry;

    /**
     * Verifies a RankEntry message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RankEntry message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RankEntry
     */
    public static fromObject(object: { [k: string]: any }): RankEntry;

    /**
     * Creates a plain object from a RankEntry message. Also converts values to other types if specified.
     * @param message RankEntry
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RankEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RankEntry to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RspPlayerRankList. */
export interface IRspPlayerRankList {

    /** RspPlayerRankList itype */
    itype: number;

    /** RspPlayerRankList playerEntry */
    playerEntry: IRankEntry;

    /** RspPlayerRankList entryList */
    entryList?: (IRankEntry[]|null);
}

/** Represents a RspPlayerRankList. */
export class RspPlayerRankList implements IRspPlayerRankList {

    /**
     * Constructs a new RspPlayerRankList.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRspPlayerRankList);

    /** RspPlayerRankList itype. */
    public itype: number;

    /** RspPlayerRankList playerEntry. */
    public playerEntry: IRankEntry;

    /** RspPlayerRankList entryList. */
    public entryList: IRankEntry[];

    /**
     * Creates a new RspPlayerRankList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RspPlayerRankList instance
     */
    public static create(properties?: IRspPlayerRankList): RspPlayerRankList;

    /**
     * Encodes the specified RspPlayerRankList message. Does not implicitly {@link RspPlayerRankList.verify|verify} messages.
     * @param message RspPlayerRankList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRspPlayerRankList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RspPlayerRankList message, length delimited. Does not implicitly {@link RspPlayerRankList.verify|verify} messages.
     * @param message RspPlayerRankList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRspPlayerRankList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RspPlayerRankList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RspPlayerRankList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RspPlayerRankList;

    /**
     * Decodes a RspPlayerRankList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RspPlayerRankList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RspPlayerRankList;

    /**
     * Verifies a RspPlayerRankList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RspPlayerRankList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RspPlayerRankList
     */
    public static fromObject(object: { [k: string]: any }): RspPlayerRankList;

    /**
     * Creates a plain object from a RspPlayerRankList message. Also converts values to other types if specified.
     * @param message RspPlayerRankList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RspPlayerRankList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RspPlayerRankList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ReqGetPlayerNearbyRank. */
export interface IReqGetPlayerNearbyRank {

    /** ReqGetPlayerNearbyRank itype */
    itype: number;
}

/** Represents a ReqGetPlayerNearbyRank. */
export class ReqGetPlayerNearbyRank implements IReqGetPlayerNearbyRank {

    /**
     * Constructs a new ReqGetPlayerNearbyRank.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqGetPlayerNearbyRank);

    /** ReqGetPlayerNearbyRank itype. */
    public itype: number;

    /**
     * Creates a new ReqGetPlayerNearbyRank instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqGetPlayerNearbyRank instance
     */
    public static create(properties?: IReqGetPlayerNearbyRank): ReqGetPlayerNearbyRank;

    /**
     * Encodes the specified ReqGetPlayerNearbyRank message. Does not implicitly {@link ReqGetPlayerNearbyRank.verify|verify} messages.
     * @param message ReqGetPlayerNearbyRank message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqGetPlayerNearbyRank, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqGetPlayerNearbyRank message, length delimited. Does not implicitly {@link ReqGetPlayerNearbyRank.verify|verify} messages.
     * @param message ReqGetPlayerNearbyRank message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqGetPlayerNearbyRank, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqGetPlayerNearbyRank message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqGetPlayerNearbyRank
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqGetPlayerNearbyRank;

    /**
     * Decodes a ReqGetPlayerNearbyRank message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqGetPlayerNearbyRank
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqGetPlayerNearbyRank;

    /**
     * Verifies a ReqGetPlayerNearbyRank message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqGetPlayerNearbyRank message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqGetPlayerNearbyRank
     */
    public static fromObject(object: { [k: string]: any }): ReqGetPlayerNearbyRank;

    /**
     * Creates a plain object from a ReqGetPlayerNearbyRank message. Also converts values to other types if specified.
     * @param message ReqGetPlayerNearbyRank
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqGetPlayerNearbyRank, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqGetPlayerNearbyRank to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ReqPlayerAction. */
export interface IReqPlayerAction {

    /** ReqPlayerAction action */
    action: number;
}

/** Represents a ReqPlayerAction. */
export class ReqPlayerAction implements IReqPlayerAction {

    /**
     * Constructs a new ReqPlayerAction.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqPlayerAction);

    /** ReqPlayerAction action. */
    public action: number;

    /**
     * Creates a new ReqPlayerAction instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqPlayerAction instance
     */
    public static create(properties?: IReqPlayerAction): ReqPlayerAction;

    /**
     * Encodes the specified ReqPlayerAction message. Does not implicitly {@link ReqPlayerAction.verify|verify} messages.
     * @param message ReqPlayerAction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqPlayerAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqPlayerAction message, length delimited. Does not implicitly {@link ReqPlayerAction.verify|verify} messages.
     * @param message ReqPlayerAction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqPlayerAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqPlayerAction message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqPlayerAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqPlayerAction;

    /**
     * Decodes a ReqPlayerAction message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqPlayerAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqPlayerAction;

    /**
     * Verifies a ReqPlayerAction message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqPlayerAction message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqPlayerAction
     */
    public static fromObject(object: { [k: string]: any }): ReqPlayerAction;

    /**
     * Creates a plain object from a ReqPlayerAction message. Also converts values to other types if specified.
     * @param message ReqPlayerAction
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqPlayerAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqPlayerAction to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an InfPlayerAction. */
export interface IInfPlayerAction {

    /** InfPlayerAction uin */
    uin: number;

    /** InfPlayerAction action */
    action: number;
}

/** Represents an InfPlayerAction. */
export class InfPlayerAction implements IInfPlayerAction {

    /**
     * Constructs a new InfPlayerAction.
     * @param [properties] Properties to set
     */
    constructor(properties?: IInfPlayerAction);

    /** InfPlayerAction uin. */
    public uin: number;

    /** InfPlayerAction action. */
    public action: number;

    /**
     * Creates a new InfPlayerAction instance using the specified properties.
     * @param [properties] Properties to set
     * @returns InfPlayerAction instance
     */
    public static create(properties?: IInfPlayerAction): InfPlayerAction;

    /**
     * Encodes the specified InfPlayerAction message. Does not implicitly {@link InfPlayerAction.verify|verify} messages.
     * @param message InfPlayerAction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IInfPlayerAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified InfPlayerAction message, length delimited. Does not implicitly {@link InfPlayerAction.verify|verify} messages.
     * @param message InfPlayerAction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IInfPlayerAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an InfPlayerAction message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns InfPlayerAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): InfPlayerAction;

    /**
     * Decodes an InfPlayerAction message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns InfPlayerAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): InfPlayerAction;

    /**
     * Verifies an InfPlayerAction message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an InfPlayerAction message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns InfPlayerAction
     */
    public static fromObject(object: { [k: string]: any }): InfPlayerAction;

    /**
     * Creates a plain object from an InfPlayerAction message. Also converts values to other types if specified.
     * @param message InfPlayerAction
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: InfPlayerAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this InfPlayerAction to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ReqUpdatePlayerMaxScore. */
export interface IReqUpdatePlayerMaxScore {

    /** ReqUpdatePlayerMaxScore itype */
    itype: number;

    /** ReqUpdatePlayerMaxScore score */
    score: number;
}

/** Represents a ReqUpdatePlayerMaxScore. */
export class ReqUpdatePlayerMaxScore implements IReqUpdatePlayerMaxScore {

    /**
     * Constructs a new ReqUpdatePlayerMaxScore.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqUpdatePlayerMaxScore);

    /** ReqUpdatePlayerMaxScore itype. */
    public itype: number;

    /** ReqUpdatePlayerMaxScore score. */
    public score: number;

    /**
     * Creates a new ReqUpdatePlayerMaxScore instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqUpdatePlayerMaxScore instance
     */
    public static create(properties?: IReqUpdatePlayerMaxScore): ReqUpdatePlayerMaxScore;

    /**
     * Encodes the specified ReqUpdatePlayerMaxScore message. Does not implicitly {@link ReqUpdatePlayerMaxScore.verify|verify} messages.
     * @param message ReqUpdatePlayerMaxScore message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqUpdatePlayerMaxScore, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqUpdatePlayerMaxScore message, length delimited. Does not implicitly {@link ReqUpdatePlayerMaxScore.verify|verify} messages.
     * @param message ReqUpdatePlayerMaxScore message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqUpdatePlayerMaxScore, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqUpdatePlayerMaxScore message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqUpdatePlayerMaxScore
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqUpdatePlayerMaxScore;

    /**
     * Decodes a ReqUpdatePlayerMaxScore message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqUpdatePlayerMaxScore
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqUpdatePlayerMaxScore;

    /**
     * Verifies a ReqUpdatePlayerMaxScore message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqUpdatePlayerMaxScore message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqUpdatePlayerMaxScore
     */
    public static fromObject(object: { [k: string]: any }): ReqUpdatePlayerMaxScore;

    /**
     * Creates a plain object from a ReqUpdatePlayerMaxScore message. Also converts values to other types if specified.
     * @param message ReqUpdatePlayerMaxScore
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqUpdatePlayerMaxScore, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqUpdatePlayerMaxScore to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
