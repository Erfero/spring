package bj.highfive.demohighfive;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller // ceci signifie que cette classe est un controller
@RequestMapping(path = "/api") // ceci signifie que l'URL commence par /api (après l'url de l'application)
public class AlbumController {
	@Autowired // ceci demande à java d'injecter le "bean" AlbumRepository

	AlbumRepository albumRepository; // instance du bean AlbumRepository

	// Create
	@PostMapping("/album")
	public @ResponseBody Album createAlbum(@RequestBody Album album) {
		return this.albumRepository.save(album);

	}

	@PostMapping("/albums")
	public @ResponseBody List<Album> createAlbums( @RequestBody List<Album> albums) {
		return (List<Album>) this.albumRepository.saveAll(albums);

	}

	// Read

	@GetMapping(path = "/albums")
	public @ResponseBody Iterable<Album> getAlbums( ) {
		// localhost:5000/api/albums
		// return generateAlbums();

		return this.albumRepository.findAll();

	}

	@GetMapping("/album/{id}")
	public @ResponseBody Album getAlbumById(@RequestParam long id) {
		return this.albumRepository.findById(id).orElse(null);
	}

	// Update
	@PutMapping("/albums")
	public @ResponseBody Album updAlbum( @RequestBody Album album) {
		Album existingAlbum = this.albumRepository.findById(album.getId()).orElse(null);
		existingAlbum.setRef(album.getRef());
		existingAlbum.setName(album.getName());
		existingAlbum.setTitle(album.getTitle());
		existingAlbum.setDescription(album.getDescription());
		existingAlbum.setDuration(album.getDuration());
		existingAlbum.setStatus(album.getStatus());
		existingAlbum.setUrl(album.getUrl());
		existingAlbum.setTags(album.getTags());
		existingAlbum.setLike(album.getLike());

		return this.albumRepository.save(existingAlbum);

	}

	// Delete
	@DeleteMapping("/albums/{id}")
	public @ResponseBody String deleteAlbum( @RequestParam Album album) {
		this.albumRepository.delete(album);
		return "Album supprimé:" + album.getId();
	}

	public List<Album> generateAlbums() {
	// pour la simplicité on retourne une liste vide
	Album album1 = new Album(
	"Zouk",
	"Les rouages de l'amour",
	"Mr. Love",
	"...",
	3000,
	"true",
	"https://love.com/album1",
	Arrays.asList("love", "good"),
	"like");
	Album album2 = new Album(
	"Reggae",
	"one people one bear ",
	"Bob",
	"...",
	3000,
	"true",
	"https://love.com/album2",

	Arrays.asList("love",
	"good"),
	"like");
	Album album3 = new Album(
	"music",
	"Les choses de l'amour ",
	"Mr. Love",
	"...",
	3000,
	"true",
	"https://love.com/album3",

	Arrays.asList("love", "good"),
	"like");

	System.out.println(album1);
	return Arrays.asList(album1, album2, album3);
	}
}
