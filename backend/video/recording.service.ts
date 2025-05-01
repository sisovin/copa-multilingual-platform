import { Injectable } from '@nestjs/common';
import { writeFile, readFile } from 'fs/promises';
import { join } from 'path';

@Injectable()
export class RecordingService {
  private recordingsPath = join(__dirname, 'recordings');

  async storeRecording(id: string, data: Buffer): Promise<void> {
    const filePath = this.getFilePath(id);
    await writeFile(filePath, data);
  }

  async retrieveRecording(id: string): Promise<Buffer> {
    const filePath = this.getFilePath(id);
    return await readFile(filePath);
  }

  private getFilePath(id: string): string {
    return join(this.recordingsPath, `${id}.webm`);
  }
}
