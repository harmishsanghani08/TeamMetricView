/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSF/JSFManagedBean.java to edit this template
 */
package bean;

import client.MovieClient;
import entity.Movie;
import entity.Theatre;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import javax.annotation.PostConstruct;
import javax.inject.Named;
import javax.enterprise.context.Dependent;
import javax.enterprise.context.SessionScoped;
import javax.ws.rs.core.GenericType;
import javax.ws.rs.core.Response;

/**
 *
 * @author Ritika Tiwari
 */
@Named(value = "movieCDI")
@SessionScoped
public class MovieCDI implements Serializable {

    MovieClient mcl; //our client
    Response rs;  //emj response che koi
    int movieid;
    int theatreid;
    String moviename;
    String location;
    String city;
    String theatrename;

    Movie movie;
    Theatre theatre;

    Collection<Movie> movies;
    GenericType<Collection<Movie>> gmovies;

    Collection<Theatre> theatres;
    GenericType<Collection<Theatre>> gtheatres;

    Collection<Integer> theatreIds = new ArrayList<>();

    public Collection<Integer> getTheatreIds() {
        return theatreIds;
    }

    public void setTheatreIds(Collection<Integer> theatreIds) {
        this.theatreIds = theatreIds;
    }

    public MovieCDI() {

        mcl = new MovieClient();
        movies = new ArrayList<>();
        theatres = new ArrayList<>();
        gmovies = new GenericType<Collection<Movie>>() {
        };
        gtheatres = new GenericType<Collection<Theatre>>() {
        };
    }

    @PostConstruct
    public void init() {
        rs = mcl.getAllTheatres(Response.class);
        theatres = rs.readEntity(gtheatres);
    }

    public String redirectToAddPage() {

        // rs = mcl.getAllTheatres(Response.class);
        //theatres = rs.readEntity(gtheatres);
        return "addmovie.jsf";
    }

    public String addmovie() {
        mcl.addMovie(moviename);
        mcl.assignMovieToTheatre(theatreIds, String.valueOf(movieid));
        return "display.jsf";
    }

    public MovieClient getMcl() {
        return mcl;
    }

    public void setMcl(MovieClient mcl) {
        this.mcl = mcl;
    }

    public Response getRs() {
        return rs;
    }

    public void setRs(Response rs) {
        this.rs = rs;
    }

    public int getMovieid() {
        return movieid;
    }

    public void setMovieid(int movieid) {
        this.movieid = movieid;
    }

    public int getTheatreid() {
        return theatreid;
    }

    public void setTheatreid(int theatreid) {
        this.theatreid = theatreid;
    }

    public String getMoviename() {
        return moviename;
    }

    public void setMoviename(String moviename) {
        this.moviename = moviename;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getTheatrename() {
        return theatrename;
    }

    public void setTheatrename(String theatrename) {
        this.theatrename = theatrename;
    }

    public Movie getMovie() {
        return movie;
    }

    public void setMovie(Movie movie) {
        this.movie = movie;
    }

    public Theatre getTheatre() {
        return theatre;
    }

    public void setTheatre(Theatre theatre) {
        this.theatre = theatre;
    }

    public Collection<Movie> getMovies() {
        return movies;
    }

    public void setMovies(Collection<Movie> movies) {
        this.movies = movies;
    }

    public GenericType<Collection<Movie>> getGmovies() {
        return gmovies;
    }

    public void setGmovies(GenericType<Collection<Movie>> gmovies) {
        this.gmovies = gmovies;
    }

    public Collection<Theatre> getTheatres() {
        return theatres;
    }

    public void setTheatres(Collection<Theatre> theatres) {
        this.theatres = theatres;
    }

    public GenericType<Collection<Theatre>> getGtheatres() {
        return gtheatres;
    }

    public void setGtheatres(GenericType<Collection<Theatre>> gtheatres) {
        this.gtheatres = gtheatres;
    }

}
