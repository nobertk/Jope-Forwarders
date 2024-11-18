"use client";
import React from "react";
import { Container, Box, Typography, Button } from "@mui/material";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          width: "100%",
          backgroundImage: 'url("/cargo.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        />

        {/* Content */}
        <Container
          maxWidth="lg"
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            zIndex: 1,
            color: "white",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", md: "4rem" },
              fontWeight: 700,
              marginBottom: 2,
              lineHeight: 1.2,
            }}
          >
            Customs Clearing &<br />
            Forwarding Agent
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", md: "1.1rem" },
              maxWidth: "600px",
              mb: 4,
              opacity: 0.9,
            }}
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
          </Typography>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FF6B00",
                color: "white",
                px: 4,
                py: 1.5,
                fontSize: "1rem",
                "&:hover": {
                  backgroundColor: "#e65100",
                },
              }}
            >
              GET A QUOTE
            </Button>

            <Button
              variant="outlined"
              sx={{
                color: "white",
                borderColor: "white",
                px: 4,
                py: 1.5,
                fontSize: "1rem",
                "&:hover": {
                  borderColor: "white",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              OUR SERVICES
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Stats Section */}

      <Box
        sx={{
          bgcolor: "#1565C0",
          color: "white",
          width: "80%",
          position: "absolute",
          left: "24px", // Aligns with container padding
          bottom: "-100px",
          marginLeft: "-100px",
          py: 6,
          px: 4,
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          borderRadius: "4px",
          zIndex: 2,
        }}
      >
        <Container
          maxWidth="lg"
          className=" flex flex-row flex-start gap-44 align-middle"
        >
          <Typography
            variant="h4"
            sx={{
              marginTop: "12px",
              fontSize: { xs: "1.75rem", md: "2rem" },
              fontWeight: 700,
              mb: 4,
            }}
          >
            Our impact on <br /> East Africa.
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "flex-start",
              gap: { xs: 4, md: 8 },
              mt: 2,
            }}
          >
            <Box>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  fontWeight: 700,
                  mb: 1,
                }}
              >
                100
                <span
                  style={{
                    color: "#FF6B00",
                  }}
                >
                  %
                </span>
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "1.1rem", opacity: 0.9 }}
              >
                Client satisfaction
              </Typography>
            </Box>

            <Box>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  fontWeight: 700,
                  mb: 1,
                }}
              >
                681
                <span
                  style={{
                    color: "#FF6B00",
                  }}
                >
                  +
                </span>
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "1.1rem", opacity: 0.9 }}
              >
                Clients worldwide
              </Typography>
            </Box>

            <Box>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  fontWeight: 700,
                  mb: 1,
                }}
              >
                12
                <span
                  style={{
                    color: "#FF6B00",
                  }}
                >
                  +
                </span>
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "1.1rem", opacity: 0.9 }}
              >
                Years of experience
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default HomePage;
