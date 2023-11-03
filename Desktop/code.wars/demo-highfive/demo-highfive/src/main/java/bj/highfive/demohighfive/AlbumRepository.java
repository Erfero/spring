package bj.highfive.demohighfive;

import org.springframework.data.repository.CrudRepository;

public interface AlbumRepository extends CrudRepository<Album, Long>  {
    /*
    * Java va automatiquement créer un Java "Bean"
     * c'est comme nous avons créer une classe java avec toutes les méthodes CRUD
     * 
     * (save, find, findById, findAll, ...) déjà implémentées
     */
}
