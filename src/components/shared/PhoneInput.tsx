// src/components/shared/PhoneInput.tsx - NEW FILE
'use client';
import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface Country {
  code: string;
  name: string;
  dialCode: string;
  flag: string;
}

const countries: Country[] = [
  { code: 'GH', name: 'Ghana', dialCode: '+233', flag: '🇬🇭' },
  { code: 'NG', name: 'Nigeria', dialCode: '+234', flag: '🇳🇬' },
  { code: 'KE', name: 'Kenya', dialCode: '+254', flag: '🇰🇪' },
  { code: 'US', name: 'United States', dialCode: '+1', flag: '🇺🇸' },
  { code: 'UK', name: 'United Kingdom', dialCode: '+44', flag: '🇬🇧' },
  { code: 'ZA', name: 'South Africa', dialCode: '+27', flag: '🇿🇦' },
  { code: 'IN', name: 'India', dialCode: '+91', flag: '🇮🇳' },
  { code: 'TG', name: 'Togo', flag: 'TG', dialCode: '+228' },
    { code: 'CI', name: 'Ivory Coast', flag: '🇨🇮', dialCode: '+225' },
    { code: 'BF', name: 'Burkina Faso', flag: '🇧🇫', dialCode: '+226' },
    { code: 'CM', name: 'Cameroon', flag: '🇨🇲', dialCode: '+237' },
    { code: 'BJ', name: 'Benin', flag: '🇧🇯', dialCode: '+229' },
    { code: 'GN', name: 'Guinea', flag: '🇬🇳', dialCode: '+224' },
    { code: 'LR', name: 'Liberia', flag: '🇱🇷', dialCode: '+231' },
    { code: 'GM', name: 'Gambia', flag: '🇬🇲', dialCode: '+220' },
    { code: 'RW', name: 'Rwanda', flag: '🇷🇼', dialCode: '+250' },
    { code: 'ET', name: 'Ethiopia', flag: '🇪🇹', dialCode: '+251' },
    { code: 'UG', name: 'Uganda', flag: '🇺🇬', dialCode: '+256' },
    { code: 'DZ', name: 'Algeria', flag: '🇩🇿', dialCode: '+213' },
    { code: 'MA', name: 'Morocco', flag: '🇲🇦', dialCode: '+212' },
    { code: 'TN', name: 'Tunisia', flag: '🇹🇳', dialCode: '+216' },
    { code: 'EG', name: 'Egypt', flag: '🇪🇬', dialCode: '+20' },
    { code: 'SN', name: 'Senegal', flag: '🇸🇳', dialCode: '+221' },
    { code: 'SL', name: 'Sierra Leone', flag: '🇸🇱', dialCode: '+232' },
    { code: 'LS', name: 'Lesotho', flag: '🇱🇸', dialCode: '+266' },
    { code: 'MG', name: 'Madagascar', flag: '🇲🇬', dialCode: '+261' },
    { code: 'MW', name: 'Malawi', flag: '🇲🇼', dialCode: '+265' },
    { code: 'ML', name: 'Mali', flag: '🇲🇱', dialCode: '+223' },
    { code: 'MR', name: 'Mauritania', flag: '🇲🇷', dialCode: '+222' },
    { code: 'MU', name: 'Mauritius', flag: '🇲🇺', dialCode: '+230' },
    { code: 'MZ', name: 'Mozambique', flag: '🇲🇿', dialCode: '+258' },
    { code: 'NA', name: 'Namibia', flag: '🇳🇦', dialCode: '+264' },
    { code: 'ZM', name: 'Zambia', flag: '🇿🇲', dialCode: '+260' },
    { code: 'ZW', name: 'Zimbabwe', flag: '🇿🇼', dialCode: '+263' }
];


interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  required?: boolean;
}

export default function PhoneInput({ 
  value, 
  onChange, 
  placeholder = "Phone number", 
  className = "",
  required = false 
}: PhoneInputProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
    setIsOpen(false);
    
    // Update the phone number with new country code
    const currentNumber = value.replace(/^\+\d+/, '');
    onChange(country.dialCode + currentNumber);
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\D/g, '');
    
    // Remove existing country code and keep only local number
    const localNumber = input;
    
    onChange(selectedCountry.dialCode + localNumber);
  };

  // Extract local number for display (without country code)
  const displayValue = value.startsWith(selectedCountry.dialCode) 
    ? value.slice(selectedCountry.dialCode.length)
    : value.replace(/^\+\d+/, '');

  // Validate phone number format
  const isValid = value.length >= 8;

  return (
    <div className={`w-full ${className}`}>
      <div 
        ref={dropdownRef}
        className={`flex border rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-[#D4AF37] focus-within:border-[#D4AF37] transition-all ${
          isValid ? 'border-green-500' : value ? 'border-red-500' : 'border-gray-300'
        }`}
      >
        {/* Country Selector */}
        <div className="relative flex-shrink-0">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center space-x-2 px-3 py-4 border-r bg-gray-50 hover:bg-gray-100 transition-colors h-full"
          >
            <span className="text-sm">{selectedCountry.flag}</span>
            <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {/* Dropdown */}
          {isOpen && (
            <div className="absolute top-full left-0 mt-1 w-64 bg-white border rounded-xl shadow-2xl z-50 max-h-60 overflow-y-auto">
              {countries.map((country) => (
                <button
                  key={country.code}
                  type="button"
                  onClick={() => handleCountrySelect(country)}
                  className={`flex items-center space-x-3 w-full px-3 py-2 hover:bg-gray-50 transition-colors ${
                    selectedCountry.code === country.code ? 'bg-[#D4AF37]/10' : ''
                  }`}
                >
                  <span className="text-base">{country.flag}</span>
                  <span className="flex-1 text-left text-sm">{country.name}</span>
                  <span className="text-xs text-gray-500">{country.dialCode}</span>
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Phone Number Input */}
        <div className="flex-1 flex items-center">
          <span className="px-3 text-gray-500 text-sm font-medium">{selectedCountry.dialCode}</span>
          <input
            type="tel"
            value={displayValue}
            onChange={handleNumberChange}
            placeholder={placeholder}
            className="flex-1 py-4 pr-4 outline-none bg-transparent text-lg"
            maxLength={15}
            required={required}
          />
        </div>
      </div>

      {/* Validation Message */}
      {value && (
        <div className={`mt-2 text-sm ${isValid ? 'text-green-600' : 'text-red-600'}`}>
          {isValid ? '✓ Valid phone number' : 'Please enter a valid phone number'}
        </div>
      )}
    </div>
  );
}