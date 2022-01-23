import { Injectable } from '@nestjs/common';
import { createHash } from "crypto";

@Injectable()
export class CipherService {

  /**
   * convert a cleartext password into a hashed digest
   * @param password cleartext password
   * @returns digest
   */
  hash(password: string): string {

    const digest = createHash('sha256').update(password).digest('hex');
    return digest;
    
  }
  
}
