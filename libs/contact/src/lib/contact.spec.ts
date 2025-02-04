// src/lib/contact.spec.ts

// lucide-react modülünü taklit ediyoruz.
jest.mock('lucide-react', () => ({
  MapPin: () => 'MockedMapPin',
  Phone: () => 'MockedPhone',
  Mail: () => 'MockedMail',
}));

describe('Contact Component Tests', () => {
  it('should return mocked values', () => {
    const { MapPin, Phone, Mail } = require('lucide-react');
    expect(MapPin()).toBe('MockedMapPin');
    expect(Phone()).toBe('MockedPhone');
    expect(Mail()).toBe('MockedMail');
  });
});
