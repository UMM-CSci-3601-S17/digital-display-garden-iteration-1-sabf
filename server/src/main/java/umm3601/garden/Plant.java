package umm3601.garden;

import com.mongodb.util.JSON;
import org.bson.BSON;
import org.bson.Document;

public class Plant {


    String _id;
    String plantID;
    String commonName;
    String cultivar;
    String source;
    String gardenLocation;
    String plantType;
    int likes;
    int dislikes;
    int year;
    String pageURL;
    String[] plantImageURLs;
    String[] recognitions;

    public Plant()
    {
        plantType = "flower"; //Unless otherwise specified
        pageURL = "";
    }

//    metadata {
//        Integer pageViews;
//        rating[] ratings;
//    }

    public boolean readyForJSON()
    {
        return true; //TODO
    }

    public Document toBSONDocument()
    {
        Document out = new Document();
        Document plantData = new Document();

        //plantData.append("_id", this._id);
        plantData.append("plantID", this.plantID);
        plantData.append("plantType", this.plantType);
        plantData.append("commonName", this.commonName);
        plantData.append("cultivar", this.cultivar);
        plantData.append("source", this.source);
        plantData.append("gardenLocation", this.gardenLocation);
        plantData.append("year", this.year);
        plantData.append("pageURL", this.pageURL);
        //plantData.append("plantImageURL", new String[0]);
        //plantData.append("recognitions", new String[0]);

        out.append("plant", plantData);
        return plantData;
    }

    public String getID() {
        return _id;
    }

    public void setID(String _id) {
        this._id = _id;
    }

    public String getPlantID() {
        return plantID;
    }

    public void setPlantID(String plantID) {
        this.plantID = plantID;
    }

    public String getCommonName() {
        return commonName;
    }

    public void setCommonName(String commonName) {
        this.commonName = commonName;
    }

    public String getCultivar() {
        return cultivar;
    }

    public void setCultivar(String cultivar) {
        this.cultivar = cultivar;
    }

    public String getSource() {
        return source;
    }

    public void setSource(String source) {
        this.source = source;
    }

    public String getGardenLocation() {
        return gardenLocation;
    }

    public void setGardenLocation(String gardenLocation) {
        this.gardenLocation = gardenLocation;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public String getPageURL() {
        return pageURL;
    }

    public void setPageURL(String pageURL) {
        this.pageURL = pageURL;
    }

    public void setLikes() { this.likes = 1; }

    public void setDisses() { this.dislikes = 1; }

}
