import axios from 'axios';
import { render, screen } from '@testing-library/react';
import GetInformations from './GetInformations';

describe('GetInformations', () => {
  test('renders device details', async () => {
    // Mock axios.get() to return test data
    const mockData = {
      data: {
        model: 'Test Model',
        alias: 'Test Hostname',
        version: 'Test Firmware Version',
        api_version: 'Test Software Version',
        uptime: 'Test Uptime',
      },
    };
    jest.spyOn(axios, 'get').mockResolvedValue(mockData);

    // Render the component
    render(<GetInformations />);

    // Expect the title and device details to be rendered
    expect(screen.getByText('Detalhes do Dispositivo')).toBeInTheDocument();
    expect(screen.getByText('Modelo:')).toBeInTheDocument();
    expect(screen.getByText('Hostname:')).toBeInTheDocument();
    expect(screen.getByText('Versão de Firmware:')).toBeInTheDocument();
    expect(screen.getByText('Versão de Software:')).toBeInTheDocument();
    expect(screen.getByText('Uptime:')).toBeInTheDocument();
    expect(screen.getByText('Test Model')).toBeInTheDocument();
    expect(screen.getByText('Test Hostname')).toBeInTheDocument();
    expect(screen.getByText('Test Firmware Version')).toBeInTheDocument();
    expect(screen.getByText('Test Software Version')).toBeInTheDocument();
    expect(screen.getByText('Test Uptime')).toBeInTheDocument();

    // Restore axios.get() to its original implementation
    jest.restoreAllMocks();
  });
});
