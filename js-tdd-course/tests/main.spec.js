import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

import {
  search,
  searchAlbums,
  searchArtists,
  searchTracks,
  searchPlaylists,
} from '../src/main';

describe('Spotify Wrapper', () => {
  describe('Smoke Tests', () => {
    // search (genérico) - pode buscar por mais de um tipo
    // searchAlbuns
    // searchArtists
    // searchTracks
    // searchPlaylists

    it('should exist the search method', () => {
      expect(search).to.exist;
    });

    it('should exist the searchAlbuns method', () => {
      expect(searchAlbums).to.exist;
    });

    it('should exist the searchArtists method', () => {
      expect(searchArtists).to.exist;
    });

    it('should exist the searchTracks method', () => {
      expect(searchTracks).to.exist;
    });

    it('should exist the searchPlaylists method', () => {
      expect(searchPlaylists).to.exist;
    });
  });
  describe('Generic Search', () => {
    let fetchedStub;

    // Executa todas as vezes antes de cada bloco
    beforeEach(() => {
      fetchedStub = sinon.stub(global, 'fetch');
      fetchedStub.resolves({ json: () => {} });
    });

    // Roda todas as vezes, depois de cada bloco
    afterEach(() => {
      fetchedStub.restore();
    });

    it('should call fetch function', () => {
      const artists = search();

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should receive the correct url to fetch', () => {
      context('passing one type', () => {
        const artists = search('Incubus', 'artist');
        const albums = search('Incubus', 'album');

        expect(fetchedStub).to.have.been.calledWith(
          'https://api.spotify.com/v1/search?q=Incubus&type=artist'
        );

        expect(fetchedStub).to.have.been.calledWith(
          'https://api.spotify.com/v1/search?q=Incubus&type=album'
        );
      });

      context('passing more than one type', () => {
        const artistsAndAlbums = search('Incubus', ['album', 'artist']);

        expect(fetchedStub).to.have.been.calledWith(
          'https://api.spotify.com/v1/search?q=Incubus&type=album,artist'
        );
      });
    });
  });
});
