// FieldEditor.tsx
import React from 'react';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';

interface FieldEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function FieldEditor({ value, onChange }: FieldEditorProps) {
  return (
    <div>
      <SunEditor
        defaultValue={value}
        setOptions={{
          height: '400px',
          buttonList: [
            ['undo', 'redo'],
            ['bold', 'italic', 'underline', 'strike'],
            ['fontColor', 'hiliteColor'], // Cores do texto e fundo
            ['list', 'align', 'fontSize'],
            ['removeFormat'],
          ],
        }}
        onChange={onChange}
        placeholder="Escreva algo..."
      />
    </div>
  );
}
