export interface PeerConnection {
  id: string;
  localDescription: SessionDescription;
  remoteDescription: SessionDescription;
  iceCandidates: IceCandidate[];
}

export interface IceCandidate {
  candidate: string;
  sdpMid: string;
  sdpMLineIndex: number;
}

export interface SessionDescription {
  type: 'offer' | 'answer' | 'pranswer' | 'rollback';
  sdp: string;
}

export default {
  PeerConnection,
  IceCandidate,
  SessionDescription,
};
