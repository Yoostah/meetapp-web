import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import { MdCameraAlt } from 'react-icons/md';

import { Container } from './styles';
import api from '~/services/api';

export default function BannerInput(props) {
  const { defaultValue, registerField } = useField('meetup_banner');
  const { setBanner } = props;

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'banner_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref]); // eslint-disable-line

  useEffect(() => {
    setBanner(file);
  }, [file, setBanner]);

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <Container name="banner_id">
      <label htmlFor="banner_id">
        {preview && <img src={preview} alt="imagem banner" />}

        {!preview && (
          <div>
            <MdCameraAlt size={54} color="#fff" />
            <strong>Selecionar imagem</strong>
          </div>
        )}

        <input
          type="file"
          id="banner_id"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}
