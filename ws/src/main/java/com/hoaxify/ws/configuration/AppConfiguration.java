package com.hoaxify.ws.configuration;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Data
@Configuration
@ConfigurationProperties(prefix = "hoaxify")
public class AppConfiguration
{
    private String uploadPath;

    private String profilStorage = "profile";

    private String attachemntStorage = "attachments";

    public String getProfileStoragePath()
    {
        return uploadPath + "/" + profilStorage;
    }

    public String getAttachmentStoragePath()
    {
        return uploadPath + "/" + attachemntStorage;
    }
}
