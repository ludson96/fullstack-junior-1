'use client';

import React from 'react';

interface JobFormFieldsProps {
  formData: {
    name: string;
    age: string;
    phone: string;
    state: string;
    city: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const inputClass = 'w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white'
  + ' placeholder-gray-500 focus:outline-none focus:border-[#DB2A6B]'
  + ' focus:ring-1 focus:ring-[#DB2A6B] transition-all';

const labelClass = 'block text-xs font-medium text-gray-300 uppercase tracking-wider mb-1.5';

export default function JobFormFields({ formData, onChange }: JobFormFieldsProps) {
  return (
    <>
      <div>
        <label htmlFor="name" className={labelClass}>
          Nome Completo
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={onChange}
          placeholder="Ex: Ludson Oliveira"
          className={inputClass}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="age" className={labelClass}>
            Idade
          </label>
          <input
            type="number"
            id="age"
            name="age"
            required
            min="16"
            max="100"
            value={formData.age}
            onChange={onChange}
            placeholder="Ex: 24"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Telefone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={onChange}
            placeholder="(00) 00000-0000"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="state" className={labelClass}>
            Estado (UF)
          </label>
          <input
            type="text"
            id="state"
            name="state"
            required
            value={formData.state}
            onChange={onChange}
            placeholder="Ex: SP"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="city" className={labelClass}>
            Cidade
          </label>
          <input
            type="text"
            id="city"
            name="city"
            required
            value={formData.city}
            onChange={onChange}
            placeholder="Ex: São Paulo"
            className={inputClass}
          />
        </div>
      </div>
    </>
  );
}
