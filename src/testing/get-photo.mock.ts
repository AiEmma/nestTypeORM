import { join } from 'path';
import { getFileToBuffer } from './get-file-to-buffer.mock';

export const getPhoto = async () => {
  const { buffer, stream } = await getFileToBuffer(
    join(__dirname, 'photo.pdf'),
  );

  const photo: Express.Multer.File = {
    fieldname: 'file',
    originalname: 'photo.pdf',
    encoding: '7bit',
    mimetype: 'image/pdf',
    size: 1024 * 50,
    stream,
    destination: '',
    filename: 'file-name',
    path: 'file-path',
    buffer,
  };

  return photo;
};
