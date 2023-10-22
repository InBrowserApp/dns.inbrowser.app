export interface Question {
  name: string;
  type: string;
  class: string;
}

export interface Answer {
  name: string;
  type: string;
  ttl: number;
  class: string;
  flush: boolean;
  data: string;
}

export interface DNSResponse {
  id: number;
  type: string;
  flags: number;
  flag_qr: boolean;
  opcode: string;
  flag_aa: boolean;
  flag_tc: boolean;
  flag_rd: boolean;
  flag_ra: boolean;
  flag_z: boolean;
  flag_ad: boolean;
  flag_cd: boolean;
  rcode: string;
  questions: Question[];
  answers: Answer[];
  authorities: any[];
  additionals: any[];
}
